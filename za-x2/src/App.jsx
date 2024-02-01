import React from 'react'
import { useLayoutEffect, useRef,useState,useEffect } from "react"
import gsap from "gsap"
import AudioComponent from './components/AudioComponent'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier, updateProfile } from 'firebase/auth';
import OtpInput from 'react-otp-input';
import { app, firestore } from './firebase'
import InputField from './components/InputField';

const defaultToasterState = {
  type: '',
  message: '',
};


const App = () => {
  const comp = useRef(null)
  // const navigate = useNavigate();
  const auth = getAuth(app);
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [toasterState, setToasterState] = useState(defaultToasterState);


  const formik = useFormik({
    initialValues: {
        name: '',
        number: '',
    },

    validationSchema: Yup.object({
        name: Yup.string().min(5, 'Must be 5 characters or more').max(18,"Yeh Kaisa Naam Hua!").required('Name is Required'),
        number: Yup.string().matches(/^[0-9]{10}$/, 'Invalid Phone Number').required('Phone number is Required'),
    }),

    onSubmit: () => {
        try {
            if (showOTP) {
                otpVerification();
            } else checkExistingUser();
        } catch (error) {
            console.error(`Form handling error: ${error}`);
            setLoading(false);
        }
    },
});

const { values, errors, touched, handleSubmit, getFieldProps } = formik;

const { name, number } = values;

useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
        setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
}, []);

useEffect(() => {
    if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
        });
    }
}, []);

const checkExistingUser = async () => {
    setLoading(true);
    setToasterState(defaultToasterState);
    const docRef = doc(firestore, 'users', number);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        setLoading(false);
        setToasterState({ type: 'error', message: 'Duplicate user, user already exists.' });
        return;
    }
    onSignup();
};

function onSignup() {
    setLoading(true);
    setToasterState(defaultToasterState);
  
    const appVerifier = window.recaptchaVerifier;

    try {
        signInWithPhoneNumber(auth, `+91${number}`, appVerifier).then((confirmationResult) => {
            if (confirmationResult) {
                window.confirmationResult = confirmationResult;
                setToasterState({ type: 'success', message: `Otp sent to +91${number} ` });
                setLoading(false);
                setShowOTP(true);
            }
        });
    } catch (error) {
        setToasterState({ type: 'error', message: 'Sign In failed, please try again' });
        console.log(error);
        setLoading(false);
        setShowOTP(false);
    }
}

const otpVerification = async () => {
    setToasterState(defaultToasterState);
    setLoading(true);
    confirmationResult
        .confirm(otp)
        .then((result) => {
            createNewUser();
            updateDisplayName();
            setToasterState({ type: 'success', message: 'Phone number verified' });
        })
        .catch((error) => {
            setToasterState({ type: 'error', message: 'Otp verification failed, please try again' });
            setLoading(false);
        });
};

const createNewUser = async () => {
    const docRef = doc(firestore, 'users', number);
    await setDoc(docRef, {
        name: name,
        
    });
};

const updateDisplayName = async () => {
    updateProfile(auth.currentUser, {
        displayName: name,
    })
        .then((result) => {
            
            setLoading(false);
            
        })
        .catch((error) => {
            console.log('Sign In failed', error);
        });
};

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3","#title-4"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from(["#welcome","#inputbox","#music"], {
          opacity: 0,
          duration: 0.5,
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
      <div
        id="intro-slider"
        className="h-screen p-10 bg-primary-bg absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
      >
        <h1 className="text-5xl text-[#9D94FE]" id="title-1">
          Project
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-2">
          Sushant Lok
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-3">
          is
        </h1>
        <h1 className="text-5xl text-[#9D94FE]" id="title-4">
          Back!
        </h1>
      </div>
      <AudioComponent id="music" />

      <div className="h-screen flex gap-y-12 bg-primary-bg flex-col">
         <h1
          id="welcome"
          className="text-5xl text-[#9D94FE] mt-[100px] font-bold w-fit mx-auto font-spaceGrotesk"
        >
          Welcome
        </h1>
       
        <div className='w-fit mx-auto' id="inputbox">
          <form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
         <div className='relative'>
          <InputField
          placeholder="Your Name, Please"
          type="text"
          name="name"
          error={errors?.name}
          touched={touched?.name}
        {...getFieldProps('name')}
           /></div>
         <div className='relative'>
          <InputField
            placeholder="Digits: Bring Cake"
            type="number"
            name="number"
            error={errors?.number}
            touched={touched?.number}
            {...getFieldProps('number')}
         /></div>
         {/* <input placeholder="Your Name, Please" type='text' className='border-[#9D94FE] font-spaceGrotesk placeholder:font-spaceGrotesk border-[2px] text-xl text-[#9d94fe] placeholder:text-[#9d94fe] p-2 w-[320px] rounded-md h-[50px] bg-[#0F110F]'></input>
         <input placeholder="Digits: Bring Cake" type='number' className='border-[#9D94FE] font-spaceGrotesk placeholder:font-spaceGrotesk border-[2px] text-xl text-[#9d94fe] placeholder:text-[#9d94fe]  p-2 w-[320px] rounded-md h-[50px] bg-[#0F110F]'></input> */}
         <button type='submit' className='bg-[#9d94fe] font-spaceGrotesk p-2 w-[320px] text-[20px] h-[50px] rounded-md'>Authorize Your Presence</button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default App