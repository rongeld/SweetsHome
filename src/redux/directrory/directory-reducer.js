import { ReactComponent as Cake } from '../../assets/cake.svg'
import { ReactComponent as Pie } from '../../assets/pie.svg'
import { ReactComponent as Cookie } from '../../assets/cookie.svg'
import { ReactComponent as Donut } from '../../assets/donut.svg'
import { ReactComponent as Croissant } from '../../assets/croissant.svg'
import { ReactComponent as Cupcake } from '../../assets/cupcake.svg'

const INITIAL_STATE = {
    sections: [
        {
          title: 'cakes',
          ImageUrl: Cake,
          id: 1,
          linkUrl: 'shop/cakes'
        },
        {
          title: 'pies',
          ImageUrl: Pie,
          id: 2,
          linkUrl: 'shop/pies'
        },
        {
          title: 'cookies',
          ImageUrl: Cookie,
          id: 3,
          linkUrl: 'shop/cookies'
        },
        {
          title: 'donuts',
          ImageUrl: Donut,
          id: 4,
          linkUrl: 'shop/donuts'
        },
        {
          title: 'croissants',
          ImageUrl: Croissant,
          id: 5,
          linkUrl: 'shop/croissants'
        },
        {
          title: 'cupcakes',
          ImageUrl: Cupcake,
          id: 67,
          linkUrl: 'shop/cupcakes'
        }
      ]
    }

    const directoryReducer = (state = INITIAL_STATE, action) => {
        switch(action.type) {
            default:
                return state;
        }
    }

export default directoryReducer;