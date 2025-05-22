export const subscription_plan = [
  {
    title: 'Free',
    price: '$0',
    list: [
      <>
        Generate up to <b>3</b> tours for free
      </>,

      <>
        Store no more than <b>2</b> tours at a time
      </>,

      <>Tours cannot be edited</>,

      <>View tours created by other users</>,

      <>Comment on and like tours</>


    ], 
    class: "small",
    button_class: "free_button",
    stripe: "free_stripe"
  },



  {
    title: 'Advanced',
    price: '$15/month',
    list: [
      <>
        Generate up to <b>100</b> tours
      </>,

      <>
        Storing an <b>unlimited number</b> of tours
      </>,

      <>Editing tours</>,

      <>Marking tours as completed</>,

      <>Publishing <b>25</b> tours</>,

      <>Access to full tour information</>
    ],
    class: "big",
    button_class: "advanced_button",
    stripe: "advanced_stripe"
  },



  {
    title: 'Standart',
    price: '$5/month',
    list: [
      <>
        Generate up to <b>15</b> tours
      </>,
        
      <>
        Storing up to <b>10</b> tours
      </>,

      <>Editing tours</>,

      <>Marking tours as completed</>,

      <>Publishing up to <b>3</b> tours</>,

      <>Access to full tour information</>
    ],
    class: "small",
    button_class: "standart_button",
    stripe: "standart_stripe"
  },
];
