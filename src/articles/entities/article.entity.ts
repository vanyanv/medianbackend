import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleEntity implements Article {
  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;

  @ApiProperty()
  id: number;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
