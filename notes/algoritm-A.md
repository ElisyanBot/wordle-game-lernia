## Vad är slut målet?
en sträng som har jämförts med en annan sträng och kollat så att bokstäverna stämmer överens.


## break down:

- om strängarna matchar direkt skicka då gissningen som [{letter: "a", result: "correct" }, {...}]

- algoritmen behöver kolla index-vis på alla bokstäver i båda orden och jämnföra dem med samma index
  - om indexen är === så blir resultatet: "correct". 
  - 

- algoritmen behöver hålla koll på de redan existerande bokstäverna och ifall gissningen innehåller
  en bokstav som finns i orden men har fel index så ska det markeras som "misplaced" i resultatet.

- om bokstaven inte finns i ordet ska bokstaven få resultatet: "incorrect".

- om gissningen innehåller två lika bokstäver men det finns en i det korrekta ordet ska
  resultatet bli "incorrect".

- alla bokstäver ifrån gissningen ska läggas till i en array som ett objekt
  {letter: " ", result: " " }


## problem som kan uppstå:

- vad händer om en bokstav i gissningen uppstår två gånger men inte i utvalda ordet?
  (ska bli incorrect som lösning)
- hur hanteras tecken? (om de inte matchar med någon av chars i ordet så blir dom incorrect)
- strängarna får inte vara längre eller kortare än varandra.(är det något som behöver fixas?)

## test: 
- kolla så att bokstäver har rätt resultat på inputsträngen
  - "correct"
  - "incorrect"
  - "misplaced"

- kolla att returvärdet är en array med obj.
