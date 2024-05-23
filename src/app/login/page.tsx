'use client';
import Image from 'next/image';

import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import { FormLabels, Placeholders } from '@/constants/form';
// images
import Illustration from '@/assets/images/home-illustration.svg';
import Logo from '@/assets/images/logo.svg';

const heading = 'Sign in';
const subheading = 'Enter your account details';
const forgotPassword = 'Forgot password?';
const submitBtn = 'Sign in';
const logoAlt = 'Logo';
const illustrationAlt = 'Illustration';
const illustrationHeading = 'Build your Personal Study Plan';
const illustrationSubheading = 'Sign in to get started';

const LoginPage = () => {
  const onChange = () => {};
  return (
    <main className="px-4 py-6 flex lg:p-20 max-w-screen-2xl mx-auto min-h-screen">
      <section className="flex-1">
        <div className="md:max-w-2xl md:mx-auto lg:mr-[100px]">
          <Image src={Logo} alt={logoAlt} />
          <div className="mt-20 mb-9">
            <h1 className="text-[32px] font-bold text-grey-900 mb-2">
              {heading}
            </h1>
            <p className="font-medium text-grey-400">{subheading}</p>
          </div>
          <form>
            <FormInput
              type="email"
              label={FormLabels.email}
              placeholder={Placeholders.email}
              onChange={onChange}
            />
            <FormInput
              type="password"
              label={FormLabels.password}
              placeholder={Placeholders.password}
              onChange={onChange}
            />
            <p className="text-sm text-grey-900 mt-1 text-right cursor-pointer">
              {forgotPassword}
            </p>
            <Button type="submit" className="w-full mt-12">
              {submitBtn}
            </Button>
          </form>
        </div>
      </section>
      <section className="hidden lg:flex flex-1 flex-col bg-primary-400 rounded-lg pt-[98px] min-h-full max-h-full">
        <div className="px-[68px]">
          <h1 className="text-5xl font-bold text-white">
            {illustrationHeading}
          </h1>
          <p className="text-lg my-4 text-grey-300">{illustrationSubheading}</p>
        </div>
        <div className="flex flex-1 relative">
          <Image
            src={Illustration}
            alt={illustrationAlt}
            className="w-full absolute"
          />
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
