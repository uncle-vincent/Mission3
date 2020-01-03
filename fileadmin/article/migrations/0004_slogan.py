# Generated by Django 2.1.7 on 2019-10-21 03:04

from django.db import migrations, models
import simditor.fields


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0003_article_abstract'),
    ]

    operations = [
        migrations.CreateModel(
            name='Slogan',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, verbose_name='标题')),
                ('content', simditor.fields.RichTextField(verbose_name='内容')),
            ],
            options={
                'verbose_name': '固定标语',
                'verbose_name_plural': '固定标语',
            },
        ),
    ]
