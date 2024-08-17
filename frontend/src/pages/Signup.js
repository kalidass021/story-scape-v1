import { Button, Label, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left*/}
        <div className='flex-1'>
          <Link
            to='/'
            className='whitespace-nowrap font-bold dark:text-white text-4xl'
          >
            <span className='px-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              Story
            </span>
            Scape
          </Link>
          <p className='text-sm mt-5'>
            You can sign up with your email and password or with Google.
          </p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div>
              <Label value='Your username'/>
              <TextInput type='text' placeholder='Enter Username' id='username' />
            </div>
            <div>
              <Label value='Your email'/>
              <TextInput type='text' placeholder='name@company.com' id='email' />
            </div>
            <div>
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Enter Password' id='password' />
            </div>
            <div>
              <Label value='Confirm Password'/>
              <TextInput type='text' placeholder='Re-enter Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
