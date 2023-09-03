from django.urls import path
from apps.precificacao.views import index

urlpatterns = [
    path('', index, name='index'),
]
