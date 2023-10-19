Python 3.11.3 (tags/v3.11.3:f3909b8, Apr  4 2023, 23:34:50) [MSC v.1934 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> nome = Guilherme
Traceback (most recent call last):
  File "<pyshell#0>", line 1, in <module>
    nome = Guilherme
NameError: name 'Guilherme' is not defined
>>> peso = 81kg
SyntaxError: invalid decimal literal
>>> idade = 26
>>> print(nome, idade, peso)
Traceback (most recent call last):
  File "<pyshell#3>", line 1, in <module>
    print(nome, idade, peso)
NameError: name 'nome' is not defined. Did you mean: 'None'?
>>> nome = input ('Qual é seu nome?')
Qual é seu nome? Guilherme
>>> idade = input ('Qual é sua idade?')
Qual é sua idade? 26
>>> peso = input (' quanto vc pesa?' )
 quanto vc pesa? 81kg
>>> print(nom,e idade, peso)
SyntaxError: invalid syntax. Perhaps you forgot a comma?
>>> print(nome, idade, peso)
 Guilherme  26  81kg
