Python 3.11.3 (tags/v3.11.3:f3909b8, Apr  4 2023, 23:34:50) [MSC v.1934 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> nome= input ('qual é seu nome?)
...              
SyntaxError: incomplete input
>>> nome = input ('Qual é seu nome?')
...              
Qual é seu nome? Guilherme
>>> idade = input (' Qual é sua idade?' )
...              
 Qual é sua idade? 26
>>> peso = input (' Qual é seu peso?' )
...              
 Qual é seu peso? 81kg
>>> script(nome,idade,peso)
...              
Traceback (most recent call last):
  File "<pyshell#4>", line 1, in <module>
    script(nome,idade,peso)
NameError: name 'script' is not defined
>>> script = (nome,idade,peso)
...              
>>> print(nome,idade,peso)
...              
 Guilherme  26  81kg
