from django.db import models


# Create your models here.

class Recipe(models.Model):
    title = models.CharField(max_length=255, default="Unknown Title")
    author = models.CharField(max_length=255, default="Unknown Title")
    ingredients = models.TextField(default="No ingredients available.")
    instructions = models.TextField(default="No instructions available.")
    image_url = models.URLField(default="https://example.com/default_poster.jpg")

    def _str_(self):
        return self.title
