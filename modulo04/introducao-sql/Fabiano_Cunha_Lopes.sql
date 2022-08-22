CREATE TABLE actor(
id VARCHAR (255) PRIMARY KEY,
name  VARCHAR(255) NOT NULL,
salary FLOAT NOT NULL,
birth_date DATE NOT NULL,
gender VARCHAR (6) NOT NULL
);
-- Exercício 01
-- a)
-- VARCHAR INFORMAR QUE A DECLARAÇÃO É UMA STRING
-- DATE INFORMAR QUE A DECLARAÇÃO É UMA DATA

-- b)

show databases;
-- Retorna quantos bancos de dados existem

show tables;
-- Retorna quantas tabelas existem

-- c)
DESCRIBE actor;

-- Informa todas os campos e suas variáveis
-- exercicio 02
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES("002",
"Glória Pires",
1200000,
"1963-08-23",
"female",
12
);

-- c) 
INSERT INTO actor 
VALUES (
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
-- Resposta Erro não tem a mesma quantidade de colunas na primeira linha
-- d)
INSERT INTO actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- Resposta falta o campo do nome que é obrigatório
-- e)
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- Resposta o campo da data falta parâmetros ""
-- f) 
INSERT INTO actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
-- Exercicio 03
-- a)
SELECT * FROM actor
WHERE gender= "female";

-- b)
SELECT salary FROM actor 
WHERE name = "Tony Ramos";

-- c)
SELECT * FROM actor 
WHERE gender= "invalid";
-- Resposta não aparece nenhuma resposta, retorna linha vazia
-- d)
SELECT id, name, salary FROM actor
WHERE salary <=  50000;

-- e)
SELECT id, nome from actor WHERE id = "002";
--  Resposta a sintaxe NOME está diferente ou não existe

-- Exercicio 04
SELECT * FROM actor 
WHERE name LIKE "A%" or name LIKE "J%" AND salary > 300000;
-- a) resposta ao utilizar os operadores de comparação iremos obter sempre a resposta escolhida

-- b)
SELECT * FROM actor 
WHERE name NOT LIKE "A%" AND salary > 350000;

-- c) 
SELECT * FROM actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

-- d)
SELECT * FROM actor
WHERE (name LIKE "%A%" OR name LIKE "%a%" OR 
name LIKE "%G%" OR name LIKE "%g%")
 AND salary BETWEEN 350000 AND 900000;
 
 
 -- Exercicio 05
 -- a)
 CREATE TABLE movie(
 id VARCHAR (255) PRIMARY KEY,
 title VARCHAR (255) NOT NULL,
 synopsis TEXT NOT NULL,
 release_date_of DATE NOT NULL,
 rating INT NOT NULL
 );
 -- B)
 INSERT INTO movie 
 VALUES(
 "001",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e 
 enfrentam a rotina do casamento. Um dia 
 eles são atingidos por um fenômeno 
 inexplicável e trocam de corpos",
 "2006-01-06",
 7 );
 -- c)
 INSERT INTO movie 
 VALUES(
 "002",
 "Doce de mãe",
 "Dona Picucha, uma animada senhora de 85 anos, 
 sempre causa grandes confusões. A vida dela e dos 
 seus quatro filhos sofre uma reviravolta depois que 
 Zaida, empregada e amiga de Dona Picucha, anuncia que 
 vai se casar e não poderá mais morar com ela",
 "2012-12-27",
 10
 );
 SELECT * FROM movie;
 -- d)
 INSERT INTO movie 
 VALUES (
 "003",
 "Dona Flor e Seus Dois Maridos",
 "Dona Flor é uma sedutora professora de culinária 
 casada com Vadinho, que só quer saber de farras e 
 jogatina nas boates. A vida de abusos acaba por acarretar 
 sua morte precoce.",
 "2017-11-02",
 8
 );
 
 -- e)
 INSERT INTO movie
 VALUES(
 "004",
 "Tropa de Elite",
 "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, 
 é designado para chefiar uma das equipes que tem como missão 
 apaziguar o Morro do Turano. Ele precisa cumprir as ordens 
 enquanto procura por um substituto para ficar em seu lugar. 
 Em meio a um tiroteio, Nascimento e sua equipe resgatam Neto 
 e Matias, dois aspirantes a oficiais da PM. 
 Ansiosos para entrar em ação e impressionados com a 
 eficiência de seus salvadores, os dois se candidatam ao curso
 de formação da Tropa de Elite.",
 "2007-10-05",
 9
 );
 
 -- Exercicio 06
 -- a)
 SELECT id, title, rating FROM movie
 WHERE id LIKE "004";
 
 -- b)
 SELECT * FROM movie
WHERE title = "Se Eu Fosse Você";

-- c)
SELECT id, title, synopsis FROM	movie
WHERE rating > 7;
 
 
 -- Exerxixio 07
 -- a)
 SELECT * FROM movie
 WHERE title LIKE "%Vida%";
 -- b)
 SELECT * FROM movie
 WHERE synopsis LIKE "%Rio de Janeiro%";
 -- c)
 SELECT *FROM movie
 WHERE release_date_of < "2022-08-22" ;
 
 -- d)
 SELECT * FROM movie
WHERE release_date_of < "2022-08-22" AND 
      (title LIKE "%Se Eu Fosse Você" OR
      synopsis LIKE "%Rio de Janeiro%") AND rating > 7;