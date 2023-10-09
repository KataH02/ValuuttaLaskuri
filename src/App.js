



import

 { 

useState

 } 

from

 

'react'



import

 

'./App.css'



import

 

axios

 

from

 

'axios'





const

 

URL

 = 

"https://api.freecurrencyapi.com/v1/latest?base_currency=EUR&apikey=fca_live_MzyxM9lMzDMLB7fKG2O3fWl3K42bAAFkL68qCMzs"



function

 

App

() {




&#160; 

const

 [

eur

, 

setEur

] = 

useState

(

0

);



&#160; 

const

 [

gbp

, 

setGbp

] = 

useState

(

0

);



&#160; 

const

 [

rate

, 

setRate

] = 

useState

(

''

);




const

 

calculate

 = (

e

) 

=>

 {



&#160; 

e

.

preventDefault

();



&#160; 

axios

.

get

(

URL

)



&#160; .

then

((

response

) 

=>

 {



&#160; &#160; 

const

 

json

 = 

response

.

data



&#160; &#160; 

setRate

(

json

.

data

.

GBP

);



&#160; &#160; 

setGbp

(

eur

 * 

json

.

data

.

GBP

)



&#160; } ).

catch

 (

error

 

=>

 {



&#160; &#160; 

alert

(

error

)



&#160; })



&#160; }




&#160; 

return

 (



&#160; &#160;

<

div

 

id

=

"container"

>



&#160; &#160; &#160;

<

form

 

onSubmit

=

{

calculate

}

>



&#160; &#160; &#160; 

<

div

 

id

=

'eur'

>



&#160; &#160; &#160; 

<

label

>

EURO: &#160;

</

label

>



&#160; &#160; &#160; &#160; 

<

input

 

type

=

'number'

 

step

=

'0.01'

 

value

=

{

eur

}

 

onChange

=

{

e

 

=>

 

setEur

(

e

.

target

.

value

)

}

/>



&#160; &#160; &#160; &#160;

<

br

></

br

>



&#160; &#160; &#160; &#160; 

<

output

>

 Rate: 

{

rate

}

</

output

>



&#160; &#160; &#160; 

</

div

>



&#160; &#160; &#160; 

<

div

 

id

=

'gbp'

>



&#160; &#160; &#160; 

<

label

>

GBP: &#160;

</

label

>



&#160; &#160; &#160; &#160; 

<

output

>

{

gbp

.

toFixed

(

2

)

}

 €

</

output

>



&#160; &#160; &#160; 

</

div

>



&#160; &#160; &#160; 

<

div

 

id

=

'calc'

>



&#160; &#160; &#160; &#160; 

<

button

>

Calculate

</

button

>



&#160; &#160; &#160; 

</

div

>



&#160; &#160; &#160; 

</

form

>



&#160; &#160;

</

div

>



&#160; );



}



export

 

default

 

App

;



