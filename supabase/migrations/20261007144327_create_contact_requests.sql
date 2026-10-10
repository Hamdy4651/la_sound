/*
# Create contact_requests table (single-tenant, no auth)

1. New Tables
- `contact_requests`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the person requesting a quote
  - `email` (text, not null) — email address for reply
  - `phone` (text, null) — optional phone number
  - `event_type` (text, not null) — type of event (Konzert, Messe, Gala, Hochzeit, etc.)
  - `event_date` (date, null) — optional preferred event date
  - `guests` (integer, null) — estimated number of guests
  - `services` (text[], null) — array of requested services (Tontechnik, Lichttechnik, etc.)
  - `message` (text, null) — additional details or questions
  - `status` (text, default 'neu') — tracking status of the request
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_requests`.
- Allow anon + authenticated INSERT only (public can submit quote requests, but cannot read/update/delete).
- No SELECT, UPDATE, or DELETE policies — data is private to the operator.
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  event_type text NOT NULL,
  event_date date,
  guests integer,
  services text[],
  message text,
  status text NOT NULL DEFAULT 'neu',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_requests" ON contact_requests;
CREATE POLICY "anon_insert_contact_requests"
ON contact_requests FOR INSERT
TO anon, authenticated
WITH CHECK (true);
