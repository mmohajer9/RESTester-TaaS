# Generated by Django 3.2.7 on 2021-09-17 19:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='testplan',
            options={'verbose_name': 'Test Plan', 'verbose_name_plural': 'Test Plans'},
        ),
        migrations.AlterModelOptions(
            name='testsuite',
            options={'verbose_name': 'Test Suite', 'verbose_name_plural': 'Test Suites'},
        ),
    ]