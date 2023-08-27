//Crie uma função que recebe como parâmetro um número e retorna true se o número for par e false se for ímpar.

def eh_par(numero):
    if numero % 2 == 0:
        return True
    else:
        return False

numero = int(input("Digite um número: "))
resultado = eh_par(numero)

if resultado:
    print("O número é par.")
else:
    print("O número é ímpar.")
