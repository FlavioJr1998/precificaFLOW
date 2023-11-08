from django.urls import path
from apps.precificacao.views import index, produto_individual, item_indivdual, dashboard_inicial_produtos, \
cadastro_produto, rateio_custos

urlpatterns = [
    path('', index, name='index'),
    path('cadastro_produto', cadastro_produto, name='cadastro_produto'),
    path('produto_individual', produto_individual, name='produto_individual'),
    path('item_indivdual', item_indivdual, name='item_indivdual'),
    path('rateio_custos', rateio_custos, name='rateio_custos'),
    path('dashboard_inicial_produtos', dashboard_inicial_produtos, name='dashboard_inicial_produtos'),
]
