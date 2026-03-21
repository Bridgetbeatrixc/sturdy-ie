import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_challenge_expertise_items_icon" AS ENUM('governance', 'infrastructure', 'collaboration', 'interoperability');
  CREATE TABLE "challenge_expertise_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"body" varchar NOT NULL,
  	"icon" "enum_challenge_expertise_items_icon" NOT NULL
  );
  
  CREATE TABLE "challenge" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"badge" varchar DEFAULT 'Challenge' NOT NULL,
  	"heading" varchar DEFAULT 'Governance-led transformation in regulated ecosystems' NOT NULL,
  	"heading_highlight" varchar DEFAULT 'Governance-led',
  	"intro" varchar DEFAULT 'Across regulated environments, the challenge is not technology.
  It is aligning governance, systems, and operations so data can be used in practice.' NOT NULL,
  	"image_id" integer NOT NULL,
  	"image_caption" varchar DEFAULT 'Executive delivery across public sector, financial services, and health systems',
  	"cta_label" varchar DEFAULT 'Explore My Work',
  	"cta_href" varchar DEFAULT '/case-studies',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "challenge_id" integer;
  ALTER TABLE "challenge_expertise_items" ADD CONSTRAINT "challenge_expertise_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "challenge" ADD CONSTRAINT "challenge_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "challenge_expertise_items_order_idx" ON "challenge_expertise_items" USING btree ("_order");
  CREATE INDEX "challenge_expertise_items_parent_id_idx" ON "challenge_expertise_items" USING btree ("_parent_id");
  CREATE INDEX "challenge_image_idx" ON "challenge" USING btree ("image_id");
  CREATE INDEX "challenge_updated_at_idx" ON "challenge" USING btree ("updated_at");
  CREATE INDEX "challenge_created_at_idx" ON "challenge" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_challenge_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "challenge_expertise_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "challenge" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "challenge_expertise_items" CASCADE;
  DROP TABLE "challenge" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_challenge_fk";
  
  DROP INDEX "payload_locked_documents_rels_challenge_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "challenge_id";
  DROP TYPE "public"."enum_challenge_expertise_items_icon";`)
}
