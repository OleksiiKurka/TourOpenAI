'use client';
import { genarateTourResponse, genateImag } from '@/src/utils/actions.util';
// import { getServerUser } from '@/src/utils/auth/get-server-user';
import { Field, Form, Formik } from 'formik';
import { useCallback, useState } from 'react';

// eslint-disable-next-line @next/next/no-async-client-component
const Profile = () => {
  // const data = async ()=>{
  //   const user = await getServerUser();
  //   console.log(user)
  // }
  // data()
  const [tour, setTour] = useState<string | null>(null);
  // console.log(user);
  return (
    <div>
      <h1>Profile,</h1>
      <button onClick={() => genateImag()}>12345678</button>
      {/* <p> {JSON.stringify(user)}</p> */}
      <Formik
        initialValues={{ city: '', country: '' }}
        onSubmit={async (values, { setSubmitting }) => {
          const value = await genarateTourResponse(values);
          console.log(value);
          setTour(value);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="city" />
            <Field type="text" name="country" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Profile;
