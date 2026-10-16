# Database Architecture

The application currently uses:

- PostgreSQL as the relational database
- Drizzle ORM for queries and schema definitions
- Drizzle Kit for generating and applying SQL migrations
- `pg` for PostgreSQL connection pooling

The local database is named:

```text
my_music_dashboard
```

Application code connects through the `DATABASE_URL` environment variable.

## Current Tables

### `instruments`

Stores the supported instrument types.

- id
- name which is unique "instrument_type"

### `practice_sessions`

Stores planned and completed practice sessions.

- id
- status
- instrument_id — optional reference to "instruments"
- category
- started_at
- duration_ms
- notes
- created_at

If an instrument is deleted, "instrument_id" becomes "NULL".

### `songs`

Stores songs the user is learning or writing.

- id
- purpose: "learning" or "writing"
- title
- artist
- notes
- created_at

### `recordings`

Stores recording metadata. Audio files are stored outside PostgreSQL.

- id
- title
- path
- duration_ms
- notes
- song_id — optional reference to "songs"
- created_at

If a song is deleted, "song_id" becomes "NULL.

## Relationships

- One instrument can have many practice sessions.
- One song can have many recordings.
- Practice sessions and recordings can exist without their related record.

## Enums

- instrument_type: supported instruments
- practice_category: ["song", "technique", "theory", "ear-training"]
- practice_progress_status: ["to-practice", "practicing", "done"]
- song_purpose: ["learning", "writing"]

## Decisions

- Primary keys use auto-incrementing integers.
- Dates use timestamps with time zones.
- Durations are stored as milliseconds.
- Recordings store a file path, not the audio itself.
- New tables will be added only when the application needs them.

## Migrations

Generate a migration after changing the database schema:

```sh
npx drizzle-kit generate --name=change-name
```
