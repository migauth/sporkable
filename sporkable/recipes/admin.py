from django.contrib import admin
from .models import Recipe


class RecipeAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'ingredients', 'instructions', 'image_url')


admin.site.register(Recipe, RecipeAdmin)
