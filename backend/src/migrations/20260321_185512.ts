import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_ventures_collaboration_sought" AS ENUM('research-partners', 'platform-integration', 'regulated-pilots');
  CREATE TYPE "public"."enum_ventures_status" AS ENUM('Exploring', 'Active', 'Relaunching');
  CREATE TYPE "public"."enum_myinsights_category" AS ENUM('Governance & Compliance', 'Research Collaboration', 'Interoperability & Standards', 'Preventive Health Innovation', 'AI & Regulated Data');
  CREATE TYPE "public"."enum_challenge_expertise_items_icon" AS ENUM('governance', 'infrastructure', 'collaboration', 'interoperability');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "ventures_collaboration_sought" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_ventures_collaboration_sought",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "ventures" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"img_id" integer NOT NULL,
  	"status" "enum_ventures_status" NOT NULL,
  	"short_overview" varchar,
  	"venture_overview" jsonb,
  	"problem_space" jsonb,
  	"innovation_direction" jsonb,
  	"data_analytics" jsonb,
  	"featured" boolean DEFAULT false,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "myinsights_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar NOT NULL,
  	"body" jsonb NOT NULL
  );
  
  CREATE TABLE "myinsights" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"category" "enum_myinsights_category" NOT NULL,
  	"author" varchar DEFAULT 'Jason Sturdy' NOT NULL,
  	"img_id" integer NOT NULL,
  	"date" timestamp(3) with time zone,
  	"excerpt" varchar NOT NULL,
  	"flagship" boolean DEFAULT false,
  	"featured" boolean DEFAULT false,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "case_studies" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"summary" jsonb NOT NULL,
  	"theme" varchar NOT NULL,
  	"context" jsonb NOT NULL,
  	"img_id" integer NOT NULL,
  	"overview_context" jsonb,
  	"environment_model" jsonb,
  	"governance_controls" jsonb,
  	"standards_interoperability" jsonb,
  	"outcomes_impact" jsonb,
  	"partnership_relevance" jsonb,
  	"featured" boolean DEFAULT false,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  	"intro" jsonb DEFAULT 'Across regulated environments, the challenge is not technology.
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
  
  CREATE TABLE "hero" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Jason Sturdy' NOT NULL,
  	"heading_highlight" varchar DEFAULT 'Sturdy',
  	"subheading" varchar DEFAULT 'Building Trusted Systems from Policy to Practice' NOT NULL,
  	"tagline" varchar DEFAULT 'Data Governance • Security Architecture • Operating Models • Digital Infrastructure',
  	"description" varchar DEFAULT 'I design systems and operating models that enable organisations to use data in practice, translating policy, regulation, and governance into infrastructure that is secure, usable, and trusted.',
  	"primary_cta_label" varchar DEFAULT 'View Case Studies',
  	"primary_cta_href" varchar DEFAULT '/case-studies',
  	"secondary_cta_label" varchar DEFAULT 'Explore Insights',
  	"secondary_cta_href" varchar DEFAULT '/myinsights',
  	"portrait_id" integer,
  	"portrait_alt" varchar DEFAULT 'Portrait of Jason Sturdy',
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"ventures_id" integer,
  	"myinsights_id" integer,
  	"case_studies_id" integer,
  	"challenge_id" integer,
  	"hero_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ventures_collaboration_sought" ADD CONSTRAINT "ventures_collaboration_sought_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "ventures" ADD CONSTRAINT "ventures_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "myinsights_sections" ADD CONSTRAINT "myinsights_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."myinsights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "myinsights" ADD CONSTRAINT "myinsights_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "case_studies" ADD CONSTRAINT "case_studies_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "challenge_expertise_items" ADD CONSTRAINT "challenge_expertise_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "challenge" ADD CONSTRAINT "challenge_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_portrait_id_media_id_fk" FOREIGN KEY ("portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ventures_fk" FOREIGN KEY ("ventures_id") REFERENCES "public"."ventures"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_myinsights_fk" FOREIGN KEY ("myinsights_id") REFERENCES "public"."myinsights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_case_studies_fk" FOREIGN KEY ("case_studies_id") REFERENCES "public"."case_studies"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_challenge_fk" FOREIGN KEY ("challenge_id") REFERENCES "public"."challenge"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_hero_fk" FOREIGN KEY ("hero_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "ventures_collaboration_sought_order_idx" ON "ventures_collaboration_sought" USING btree ("order");
  CREATE INDEX "ventures_collaboration_sought_parent_idx" ON "ventures_collaboration_sought" USING btree ("parent_id");
  CREATE UNIQUE INDEX "ventures_slug_idx" ON "ventures" USING btree ("slug");
  CREATE INDEX "ventures_img_idx" ON "ventures" USING btree ("img_id");
  CREATE INDEX "ventures_updated_at_idx" ON "ventures" USING btree ("updated_at");
  CREATE INDEX "ventures_created_at_idx" ON "ventures" USING btree ("created_at");
  CREATE INDEX "myinsights_sections_order_idx" ON "myinsights_sections" USING btree ("_order");
  CREATE INDEX "myinsights_sections_parent_id_idx" ON "myinsights_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "myinsights_slug_idx" ON "myinsights" USING btree ("slug");
  CREATE INDEX "myinsights_img_idx" ON "myinsights" USING btree ("img_id");
  CREATE INDEX "myinsights_updated_at_idx" ON "myinsights" USING btree ("updated_at");
  CREATE INDEX "myinsights_created_at_idx" ON "myinsights" USING btree ("created_at");
  CREATE UNIQUE INDEX "case_studies_slug_idx" ON "case_studies" USING btree ("slug");
  CREATE INDEX "case_studies_img_idx" ON "case_studies" USING btree ("img_id");
  CREATE INDEX "case_studies_updated_at_idx" ON "case_studies" USING btree ("updated_at");
  CREATE INDEX "case_studies_created_at_idx" ON "case_studies" USING btree ("created_at");
  CREATE INDEX "challenge_expertise_items_order_idx" ON "challenge_expertise_items" USING btree ("_order");
  CREATE INDEX "challenge_expertise_items_parent_id_idx" ON "challenge_expertise_items" USING btree ("_parent_id");
  CREATE INDEX "challenge_image_idx" ON "challenge" USING btree ("image_id");
  CREATE INDEX "challenge_updated_at_idx" ON "challenge" USING btree ("updated_at");
  CREATE INDEX "challenge_created_at_idx" ON "challenge" USING btree ("created_at");
  CREATE INDEX "hero_portrait_idx" ON "hero" USING btree ("portrait_id");
  CREATE INDEX "hero_updated_at_idx" ON "hero" USING btree ("updated_at");
  CREATE INDEX "hero_created_at_idx" ON "hero" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_ventures_id_idx" ON "payload_locked_documents_rels" USING btree ("ventures_id");
  CREATE INDEX "payload_locked_documents_rels_myinsights_id_idx" ON "payload_locked_documents_rels" USING btree ("myinsights_id");
  CREATE INDEX "payload_locked_documents_rels_case_studies_id_idx" ON "payload_locked_documents_rels" USING btree ("case_studies_id");
  CREATE INDEX "payload_locked_documents_rels_challenge_id_idx" ON "payload_locked_documents_rels" USING btree ("challenge_id");
  CREATE INDEX "payload_locked_documents_rels_hero_id_idx" ON "payload_locked_documents_rels" USING btree ("hero_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "ventures_collaboration_sought" CASCADE;
  DROP TABLE "ventures" CASCADE;
  DROP TABLE "myinsights_sections" CASCADE;
  DROP TABLE "myinsights" CASCADE;
  DROP TABLE "case_studies" CASCADE;
  DROP TABLE "challenge_expertise_items" CASCADE;
  DROP TABLE "challenge" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TYPE "public"."enum_ventures_collaboration_sought";
  DROP TYPE "public"."enum_ventures_status";
  DROP TYPE "public"."enum_myinsights_category";
  DROP TYPE "public"."enum_challenge_expertise_items_icon";`)
}
