'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import FormInput from '@/components/FormInput';
import { FormLabels, Placeholders } from '@/constants/form';
import { ROUTES } from '@/constants/navigation';
// images
import Illustration from '@/assets/images/login-illustration.svg';
import Logo from '@/assets/images/logo.svg';

const heading = 'Sign in';
const subheading = 'Enter your account details';
const forgotPassword = 'Forgot password?';
const submitBtn = 'Sign in';
const logoAlt = 'Logo';
const illustrationAlt = 'Illustration';

const LoginPage = () => {
  const router = useRouter();

  const onChange = () => {};

  const handleSubmit = () => {
    router.replace(ROUTES.DASHBOARD);
  };

  return (
    <main className="px-4 py-6 flex lg:p-20 max-w-screen-2xl mx-auto min-h-screen">
      <section className="flex-1">
        <div className="md:max-w-2xl md:mx-auto lg:mr-[100px]">
          <Image src={Logo} alt={logoAlt} />
          <div className="mt-20 mb-9">
            <h1 className="text-[32px] font-bold text-grey-900 mb-2">
              {heading}
            </h1>
            <p className="font-medium text-grey-600">{subheading}</p>
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
            <Button className="w-full mt-12" onClick={handleSubmit}>
              {submitBtn}
            </Button>
          </form>
        </div>
      </section>
      <div className="hidden lg:flex flex-1">
        <Image src={Illustration} alt={illustrationAlt} />
      </div>
    </main>
  );
};

export default LoginPage;
