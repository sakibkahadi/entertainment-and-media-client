import { BiTimeFive} from 'react-icons/bi';
import { GrMultimedia} from 'react-icons/gr';

const ChooseUs = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-4xl mb-10">Why Choose Us</h1>

            <div className="flex flex-col md:flex-row justify-between gap-20 p-2">
                <div className=" md:w-1/2 space-y-6 ">
                    <h1 className="text-xl md:text-3xl font-bold">Best valued deals you will ever find</h1>
                    <p>
                        We provide the Best deals For every categories.  We believe in an ad-free user experience, so you can explore our content without any interruptions.
                    </p>
                </div>
                <div className="md:w-1/2 space-y-10">
                    {/* first row */}
                    <div className='flex justify-between items-center gap-5'>
                        <div className='text-4xl'><BiTimeFive></BiTimeFive></div>
                        <div><h1 className='text-xl mb-2'>Timely Updates</h1>
                        <p className='text-sm'>We keep you informed about release dates, announcements, and emerging trends, ensuring you're always in the know.</p></div>
                    </div>
                    {/* 2nd  row */}
                    <div className='flex justify-between items-center gap-5'>
                        <div className='text-4xl'><GrMultimedia/></div>
                        <div><h1 className='text-xl mb-2'>Multimedia Experience</h1>
                        <p className='text-sm'> From trailers and teasers to exclusive video interviews, we cater to all your senses.</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;