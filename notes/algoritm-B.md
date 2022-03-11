## Vad är slut målet?
Att få fram ett random ord ifrån en lista där användaren har bestämt längden och antalet
upprepande bokstäver

## break down:

- ta in en lisa
- sortera listan efter storlken på orden
- hitta indexet som startar med längden på orden och indexet där sista ordet med samma längd slutar
  - dela upp den listan och spara den på annan plats
- kolla om ordet ska ha flera eller ingen upprepande char
  - sortera om listan efter om det stämmer 
- välj ett random index av den nya listan
- retunera ordet som en sträng.


## problem som kan uppstå:
- listan klipper på fel index så att ord med mindre/större längd följer med.
- man hittar inte alla lika tecken i listan och det skickar med ett mer mer/mindre

## test: 
- kolla längden på strängen som retuneras.
- kolla stavningen på strängen som retuneras.

