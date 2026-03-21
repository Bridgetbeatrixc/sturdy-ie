import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_myinsight_category" RENAME TO "enum_myinsights_category";
  ALTER TABLE "myinsight_sections" RENAME TO "myinsights_sections";
  ALTER TABLE "myinsight" RENAME TO "myinsights";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "myinsight_id" TO "myinsights_id";
  ALTER TABLE "myinsights_sections" DROP CONSTRAINT "myinsight_sections_parent_id_fk";
  
  ALTER TABLE "myinsights" DROP CONSTRAINT "myinsight_img_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_myinsight_fk";
  
  DROP INDEX "myinsight_sections_order_idx";
  DROP INDEX "myinsight_sections_parent_id_idx";
  DROP INDEX "myinsight_slug_idx";
  DROP INDEX "myinsight_img_idx";
  DROP INDEX "myinsight_updated_at_idx";
  DROP INDEX "myinsight_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_myinsight_id_idx";
  ALTER TABLE "myinsights_sections" ADD CONSTRAINT "myinsights_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."myinsights"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "myinsights" ADD CONSTRAINT "myinsights_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_myinsights_fk" FOREIGN KEY ("myinsights_id") REFERENCES "public"."myinsights"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "myinsights_sections_order_idx" ON "myinsights_sections" USING btree ("_order");
  CREATE INDEX "myinsights_sections_parent_id_idx" ON "myinsights_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "myinsights_slug_idx" ON "myinsights" USING btree ("slug");
  CREATE INDEX "myinsights_img_idx" ON "myinsights" USING btree ("img_id");
  CREATE INDEX "myinsights_updated_at_idx" ON "myinsights" USING btree ("updated_at");
  CREATE INDEX "myinsights_created_at_idx" ON "myinsights" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_myinsights_id_idx" ON "payload_locked_documents_rels" USING btree ("myinsights_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_myinsights_category" RENAME TO "enum_myinsight_category";
  ALTER TABLE "myinsights_sections" RENAME TO "myinsight_sections";
  ALTER TABLE "myinsights" RENAME TO "myinsight";
  ALTER TABLE "payload_locked_documents_rels" RENAME COLUMN "myinsights_id" TO "myinsight_id";
  ALTER TABLE "myinsight_sections" DROP CONSTRAINT "myinsights_sections_parent_id_fk";
  
  ALTER TABLE "myinsight" DROP CONSTRAINT "myinsights_img_id_media_id_fk";
  
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_myinsights_fk";
  
  DROP INDEX "myinsights_sections_order_idx";
  DROP INDEX "myinsights_sections_parent_id_idx";
  DROP INDEX "myinsights_slug_idx";
  DROP INDEX "myinsights_img_idx";
  DROP INDEX "myinsights_updated_at_idx";
  DROP INDEX "myinsights_created_at_idx";
  DROP INDEX "payload_locked_documents_rels_myinsights_id_idx";
  ALTER TABLE "myinsight_sections" ADD CONSTRAINT "myinsight_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."myinsight"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "myinsight" ADD CONSTRAINT "myinsight_img_id_media_id_fk" FOREIGN KEY ("img_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_myinsight_fk" FOREIGN KEY ("myinsight_id") REFERENCES "public"."myinsight"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "myinsight_sections_order_idx" ON "myinsight_sections" USING btree ("_order");
  CREATE INDEX "myinsight_sections_parent_id_idx" ON "myinsight_sections" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "myinsight_slug_idx" ON "myinsight" USING btree ("slug");
  CREATE INDEX "myinsight_img_idx" ON "myinsight" USING btree ("img_id");
  CREATE INDEX "myinsight_updated_at_idx" ON "myinsight" USING btree ("updated_at");
  CREATE INDEX "myinsight_created_at_idx" ON "myinsight" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_myinsight_id_idx" ON "payload_locked_documents_rels" USING btree ("myinsight_id");`)
}
