from django.conf import settings
from django.db import models


class Uvcvdhd(models.Model):
    "Generated Model"
    bbjdj = models.BigIntegerField()
    rerteuwu = models.BigIntegerField()

    def test_method(self):
        import requests

        response = requests.get("https://hello.com")
        data = response.json()
        print(data)
        return data
