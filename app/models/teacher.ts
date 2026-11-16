import { TeacherSchema } from '#database/schema'
import { belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Section from './section.ts'
export default class Teacher extends TeacherSchema {
  @belongsTo(() => Section)
  declare section: BelongsTo<typeof Section> // Relation vers le modèle Section
}
