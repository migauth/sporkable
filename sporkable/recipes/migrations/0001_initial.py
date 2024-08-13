# Generated by Django 5.1 on 2024-08-13 17:10

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recipes',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='Unknown Title', max_length=255)),
                ('author', models.CharField(default='Unknown Title', max_length=255)),
                ('ingredients', models.TextField(default='No ingredients available.')),
                ('instructons', models.TextField(default='No instrucitons available.')),
                ('image_url', models.URLField(default='https://example.com/default_poster.jpg')),
            ],
        ),
    ]
