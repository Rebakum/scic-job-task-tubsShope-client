import food from '../../assets/images/banner/food.jpg';
import fruit from '../../assets/images/banner/fruit.jpg';
import vagi from '../../assets/images/banner/vagi.jpg';

const Category = () => {
    return (
        <div className='container w-full mx-auto my-20'>
            <h1 className="my-10 text-4xl font-bold text-green-600 ">Top Product Category</h1>

          <div className='grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-col-1'>
        
          <div className='flex flex-col items-center justify-center p-10 space-y-5 border rounded-lg hover:border-green-600 '>
            <img className='rounded-full w-28 h-28 ' src={fruit} alt="" />
            <p className='text-xl font-bold'>Fruit</p>
           </div>
           <div className='flex flex-col items-center justify-center p-10 space-y-5 border rounded-lg hover:border-green-600 '>
           <img className='rounded-full w-28 h-28' src={food} alt="" />
            <p className='text-xl font-bold'>Food</p>
           </div>
           <div className='flex flex-col items-center justify-center p-10 space-y-5 border rounded-lg hover:border-green-600 '>
           <img className='rounded-full w-28 h-28' src={vagi} alt="" />
            <p className='text-xl font-bold'>Vagetabls</p>
           </div>
          </div>
        </div>
    );
};

export default Category;