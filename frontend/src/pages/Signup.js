import { useState } from 'react';
import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // getting the data from the form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  // submit the form data
  const handleSubmit = async (e) => {
    // prevent the page from reloading
    e.preventDefault();
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      return setErrorMessage('Please fill out all fields.');
    }
    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage('Passwords not match');
    }

    try {
      setLoading(true);
      // clear the previous err msg
      setErrorMessage(null);
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // setLoading(false);
      if (res.ok) {
        navigate('/signin');
      }

      // if data.success === false
      if (!data.success) {
        return setErrorMessage(data.message);
      }
    } catch (err) {
      console.error(`Error while sign up request ${err}`);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

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
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='Username' />
              <TextInput
                type='text'
                placeholder='Enter Username'
                id='username'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Email' />
              <TextInput
                type='email'
                placeholder='name@company.com'
                id='email'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Password' />
              <TextInput
                type='password'
                placeholder='Enter Password'
                id='password'
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value='Confirm Password' />
              <TextInput
                type='password'
                placeholder='Re-enter Password'
                id='confirmPassword'
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone='purpleToPink'
              type='submit'
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Sign up'
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign in
            </Link>
          </div>
          {/* form validation error message */}
          {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
