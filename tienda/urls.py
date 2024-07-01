from django.urls import path
from .  import views

urlpatterns = [
    path('',views.home, name='inicio' ),
    path('Carrito/',views.carrito, name='Carrito' ),
    path('Clasica/',views.clasica, name='Clasica' ),
    path('Contacto/',views.contacto, name='Contacto' ),
    path('Inicio-Sesion/',views.inisesion, name='Iniciosesion' ),
    path('Jazz/',views.jazz, name='Jazz' ),
    path('Nosotros/',views.nosotros, name='Nosotros' ),
    path('Registro/',views.registro, name='Registro' ),
    path('Rock/',views.rock, name='Rock' ),
    path('agregar-producto', views.agregar_producto, name = 'agregar_producto'),
]
