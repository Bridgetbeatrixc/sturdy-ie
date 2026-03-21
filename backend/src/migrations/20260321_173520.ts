import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "challenge" ALTER COLUMN "intro" SET DATA TYPE jsonb;
  ALTER TABLE "challenge" ALTER COLUMN "intro" SET DEFAULT 'Across regulated environments, the challenge is not technology.
  It is aligning governance, systems, and operations so data can be used in practice.';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "challenge" ALTER COLUMN "intro" SET DATA TYPE varchar;
  ALTER TABLE "challenge" ALTER COLUMN "intro" SET DEFAULT 'Across regulated environments, the challenge is not technology.
  It is aligning governance, systems, and operations so data can be used in practice.';`)
}
