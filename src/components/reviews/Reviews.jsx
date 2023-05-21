import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {

    const reviewData = [
        {
          "name": "Sarah Thompson",
          "occupation": "Teacher",
          "image": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "review": "I recently visited Toy Heaven, and I was impressed by the wide variety of toys they offered. The website was well-organized, making it easy to navigate and find specific toys. The product descriptions and images were detailed, providing a clear understanding of each toy. The checkout process was smooth and secure, and my order arrived promptly. Overall, a great online shopping experience for toy enthusiasts!"
        },
        {
          "name": "John Anderson",
          "occupation": "Software Engineer",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSmbCUztgZQXeFQY-BvGs__KnpO6vWCYUwTf7MXM-PPt1xnsuW1k7L5Pv7CabRSGETu_Y&usqp=CAU",
          "review": "I had a disappointing experience with Toy Heaven. The website was slow and unresponsive, making it frustrating to browse through the toy selection. Some of the product pages had incomplete information or broken images, which made it difficult to make informed purchasing decisions. Additionally, the checkout process was confusing and had technical glitches. I hope they improve their website's performance and user experience to enhance customer satisfaction."
        },
        {
          "name": "Emma Roberts",
          "occupation": "Parent and Blogger",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJzyQcBu_7EH0wSSW14L4Edxsj3X8AJKcy3UBpQE33iMrZ8Z3SNXmPpEZyqsl898vYwI&usqp=CAU",
          "review": "Toy Heaven exceeded my expectations. It had an attractive and intuitive design that made it enjoyable to explore. The search functionality was robust, allowing me to quickly find the toys I was looking for. The product pages had comprehensive descriptions, multiple high-quality images, and customer reviews, helping me make well-informed choices. The checkout process was seamless, and my order arrived in excellent condition. I highly recommend Toy Heaven for toy enthusiasts."
        }
      ]
      


    return (
        <div className='my-20 py-10 bg-indigo-800'>
            <h1 className='text-white font-bold text-4xl text-center my-6'>Our happy Clients</h1>
            <div className='grid md:grid-cols-3 gap-6 w-4/5 mx-auto'>
                {
                reviewData.map(review=><Review key={review.id} data={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;