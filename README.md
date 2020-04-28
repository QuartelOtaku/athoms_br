# Atoms BR API 
API criada para auxiliar no desenvolvimento do app **[FindLab](https://play.google.com/store/apps/details?id=com.agronault.FindLabs)**.

## Informações disponíveis
<b>-> Visão Geral</b>

- Descrição
- Classificação
- Número Atômico
- Símbolo Atômico
- Massa Atômica
- Número de Massa
- Grupo
- Período
- Ano da Descoberta (?)
- Número Cas
- Quem Descobriu

<b>-> Propriedades Físicas</b>

- Densidade
- Ponto de Fusão (°C)
- Ponto de Ebulição (°C)
- Valência
- Quadra

<b>-> Composição</b>
- Universo (?)
- Sol (?)
- Oceano
- Corpo Humano (?)
- Crosta Terrestre
- Meteoritos (?)

**OBS:** Os pontos que possuem uma interrogação (?) significam que essa informação pode ser desconhecida para tal átomo.

## Como Usar

A requisição é feita pelo **número atômico do átomo**.
Então se queremos saber informações sobre o carbono, por exemplo, existem atualmente 3 formas de pesquisa:

---
### Obtendo todas as informações de um átomo.
Se queremos obter todas as informações cadastradas do carbono, por exemplo, devemos pesquisar por `https://athoms-br.herokuapp.com/atomo/6`

E o seguinte JSON será retornado:
```
{
    "visao_geral": {
        "nome":"Carbono",
        "descricao":"O carbono está presente em todas as formas de vida, e no corpo humano é o segundo elemento mais abundante em massa (cerca de 18,5%) depois do oxigênio. Elemento básico para todas as formas de vidas.",
        "classificacao": "Ametal",
        "numero_atomico": 6,
        "simbolo atomico": "C",
        "numero de massa": 12011,
        "grupo": 14,
        "periodo": 2,
        "ano_da_descoberta": null,
        "numero_cas": "7440-44-0",
        "quem_descobriu": "Antonie Lavoisier"
     },
     "propriedades_físicas": {
        "densidade": 2267,
        "ponto_de_fusao": 3500,
        "ponto_de_ebulicao": 4827,
        "valencia": 4,
        "quadra": "p"
     }, 
     "composicao": {
        "universo": "0.5",
        "sol": "0.3",
        "oceano": "2.8*10e-3",
        "corpo_humano": "0.23",
        "crosta_terrestre": "0.18",
        "meteoritos":"1.5"
     }
 }
 ```
### Obtendo apenas o nome do átomo
Se queremos obter apenas o nome de um determinado valor de número atômico devemos pesquisar como:
`https://athoms-br.herokuapp.com/atomo/name/6`

E então a string : ``"Carbono"`` é retornada.

### Obtendo apenas a descrição do átomo
Se queremos obter apenas a descrição de um determinado átomo de número atômico específico devemos pesquisar como:
`https://athoms-br.herokuapp.com/atomo/desc/6`

E então temos a string: ``"O carbono está presente em todas as formas de vida, e no corpo humano é o segundo elemento mais abundante em massa (cerca de 18,5%) depois do oxigênio. Elemento básico para todas as formas de vidas."``
