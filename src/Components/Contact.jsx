import React from 'react'

export const Contact = () => {
  return (
    <div id="contact" className="md:ml-[25%] md:w-[75%] py-10 p-2 ">
        <div class="">
            <div class="grid md:grid-cols-2 gap-2 ">
                {/* <!-- right --> */}
                <div class=" h-[30rem] w-full">
                    <div class="p-">
                        <ul class="capitalize py-5">
                            <li class="text-lg font-bold uppercase">-let's connect</li>
                            <li class="font-extrabold text-4xl py-2 text-primary">get in touch</li>
                        </ul>
                        <p class="py-2 tracking-wide">I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want to run past me. You can contact anytime at 24/7</p>
                        <ul class="capitalize py-10 font-bold text-secondary relative">
                            <li class="absolute h-28 w-1 bg-primary left-0 rounded"><a href="#"></a></li>
                            <li class="py-2 underline hover:text-primary px-5">+234-7034798736</li>
                            <li class="py-2 underline hover:text-primary px-5">AyokaCynthia23@gmail.com</li>
                            <li class="py-2 underline hover:text-primary px-5">Owerri imo sate, Nigeria</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- left --> */}
                <div class=" h-[30rem] w-full ">
                    <form action="" method="post" class="py-2 capitalize ">
                        <div class="my-3">
                            <input type="text" onfocus="this.value = '' " placeholder="enter your name:"  class="rounded-lg bg-[#ffff] bg-opacity-40 capitalize input  input-secondar w-full" />
                        </div>
                        <div class="my-3">
                            <input type="email" onfocus="this.value = '' " placeholder="your email:" class="rounded-lg bg-[#ffff] bg-opacity-40 capitalize input w-full input-secondar " />
                        </div>
                        <div class="my-3">
                            <textarea onfocus="this.value = '' " class="rounded-lg bg-[#ffff] bg-opacity-40 capitalize textarea textarea-bordered w-full h-[10rem] text-lg textarea-secondar" placeholder="write something:"></textarea>
                        </div>
                        <div class="my-3">
                            <button type="submit" value="Submit" class="rounded-lg btn btn-outline font-bold w-full text-base-200 btn-primary shadow-lg ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {/* map  */}
           <div class="relative h-96 w-full mx-auto p-2">
                <p>Map</p>
                <div class="absolute inset-0 right-0 left-0 top-0  ">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63545.24913372989!2d6.977060246842966!3d5.480775982906745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1042599d25620855%3A0x3df49e1d3b9f730d!2sOwerri%20Municipal%2C%20Imo!5e0!3m2!1sen!2sng!4v1682094327515!5m2!1sen!2sng" width="100%" height="100%" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           </div>
        </div>
    </div>
  )
}

