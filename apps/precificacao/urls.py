from django.urls import path
from apps.precificacao.views import index, produto_individual, item_indivdual

urlpatterns = [
    path('', index, name='index'),
    path('produto_individual', produto_individual, name='produto_individual'),
    path('item_indivdual', item_indivdual, name='item_indivdual'),
]
