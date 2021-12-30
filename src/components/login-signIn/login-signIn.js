import "../styles/app.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { Form, Input, Button, Checkbox } from "antd";

const loginPage = () => {
  const introduce_text = {
    company_name: "Griya",
    welcom: {
      greeting: "Welcome To Griya",
      introduce:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,",
    },
    author: {
      main: "Copyright © Designed & Developed by DexignZone 2021",
      sub: "program by Nhan 2021",
    },
  };

  const onFinish = (values) => {
    if (values !== undefined) {
      // values.user.rememberMe = remember;
      console.log(values);
      // setUser(values);
      // SetCheckResults(true);
    }
  };

  return (
    <div className="bg-[url('../image/login-bg.jpg')] bg-cover p-[50px] ">
      <div className="flex justify-center h-[600px] rounded-xl ">
        {/* introduce */}

        <div className="text-white flex flex-col justify-between p-[50px] w-3/5 overflow-hidden relative bg-blue-400 bg-gradient-to-t rounded-l-xl">
          {/* logo */}
          <div className="flex justify-start items-center z-10">
            {/* logo */}
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="64" height="64" rx="18" fill="#F2F6FC"></rect>
              <path
                d="M33.9126 48.6459H16.7709C15.9917 48.6459 15.3542 48.0084 15.3542 47.2292V22.9334C15.3542 22.1542 15.9917 21.5167 16.7709 21.5167H17.6209C27.3959 21.5167 35.3292 29.45 35.3292 39.225V47.2292C35.2584 48.0084 34.6917 48.6459 33.9126 48.6459ZM18.1167 45.8834H32.4959V39.225C32.4959 31.15 26.1209 24.6334 18.1167 24.35V45.8834Z"
                fill="#216FED"
              ></path>
              <path
                d="M47.2291 48.6459H30.0874C29.3083 48.6459 28.6708 48.0084 28.6708 47.2292C28.6708 46.45 29.3083 45.8125 30.0874 45.8125H45.8833V33.0625C45.8833 24.9875 39.5083 18.4709 31.5041 18.1875V28.2459C31.5041 29.025 30.8666 29.6625 30.0874 29.6625C29.3083 29.6625 28.6708 29.025 28.6708 28.2459V16.7709C28.6708 15.9917 29.3083 15.3542 30.0874 15.3542H30.9374C40.7124 15.3542 48.6458 23.2875 48.6458 33.0625V47.3C48.6458 48.0084 48.0083 48.6459 47.2291 48.6459Z"
                fill="#216FED"
              ></path>
              <path
                d="M28.246 48.6458H22.296C21.5169 48.6458 20.8794 48.0083 20.8794 47.2292V37.95C20.8794 37.1709 21.5169 36.5334 22.296 36.5334H28.246C29.0252 36.5334 29.6627 37.1709 29.6627 37.95V47.2292C29.6627 48.0083 29.0252 48.6458 28.246 48.6458ZM23.7127 45.8833H26.8294V39.3667H23.7127V45.8833Z"
                fill="#216FED"
              ></path>
            </svg>
            {/* company name */}
            <h1 className="p-3 ">{introduce_text.company_name}</h1>
          </div>
          {/* welcom */}
          <div className="flex flex-col z-10">
            <h1>{introduce_text.welcom.greeting}</h1>
            <span>{introduce_text.welcom.introduce}</span>

            {/* social network     */}
            <div className="flex">
              <div className="w-[45px] h-[45px] bg-blue-light rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear ">
                <FaFacebookF className="text-lg" />
              </div>
              <div className="w-[45px] h-[45px] bg-blue-light rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear ">
                <AiOutlineTwitter className="text-lg" />
              </div>
              <div className="w-[45px] h-[45px] bg-blue-light rounded-xl m-3 flex justify-center items-center hover:bg-white hover:text-black duration-500 ease-linear ">
                <FaLinkedinIn className="text-lg" />
              </div>
            </div>
            <span>{introduce_text.author.main}</span>
            <span>{introduce_text.author.sub}</span>
          </div>

          {/* decoration block */}

          <div className="w-[250px] h-[250px] absolute  bg-login_page-200 right-[-80px] top-[-100px] rounded-[60px] flex justify-center items-center rotate-45 z-0 animate-balloons">
            <div className="w-[150px] h-[150px] bg-login_page-500 rounded-xl "></div>
          </div>
          <div className="absolute"></div>

          <div className="w-[250px] h-[250px] absolute  bg-login_page-300 left-[-80px] top-[125px] rounded-[60px] flex justify-center items-center rotate-45 z-0 animate-balloons">
            <div className="w-[150px] h-[150px] bg-login_page-100 rounded-xl "></div>
          </div>
          <div className="absolute"></div>
        </div>

        {/* form */}

        <Form
          name="loginform"
          onFinish={onFinish}
          className="w-2/5 bg-white rounded-r-xl text-grey-medium p-12 flex flex-col justify-center "
        >
          <div className="py-4">
            <h2>Sign in</h2>
            <span className="text-lg">
              Sign in by entering information below
            </span>
          </div>
          <div>
            {/* email */}
            <Form.Item
              name={["user", "name"]}
              label="Email"
              initialValue="demo@example.com"
              className="font-bold border-b-2 border-black  "
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "this is not a valid email",
                },
                // check email include one in special characters
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (value !== undefined) {
                      // console.log("email:", value);
                      let arr_str = value.split("@");
                      // console.log("arr_str", arr_str, arr_str.length);
                      if (arr_str.length === 2) {
                        let local_part = arr_str[0];
                        let format = /[!@#$%^&*+\-=\[\]`|\/?]+/;
                        if (format.test(local_part)) {
                          console.log("local_part", local_part);
                          return Promise.reject(
                            Error("this is not a valid email!")
                          );
                        }
                        return Promise.resolve();
                      }
                    }
                    return Promise.reject(Error(""));
                  },
                }),
              ]}
            >
              <Input
                placeholder="Email"
                //   onChange={closeResults}
                className="w-full focus:outline-none py-3"
              />
            </Form.Item>
            {/* Password */}
            <Form.Item
              name={["user", "password"]}
              label="Password"
              initialValue="demo"
              className="font-bold border-b-2 border-black outline-none"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <input
                type="password"
                name="password"
                required
                className="w-full focus:outline-none py-3"
              />
            </Form.Item>

            {/* remember */}
            <Form.Item className="py-3">
              <Checkbox>
                <span>Remember my preference</span>
              </Checkbox>
            </Form.Item>
            {/* Signin */}
            <Form.Item className="py-3">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-blue-600 hover:bg-blue-800 transition-colors p-2 rounded-xl text-white"
              >
                Sign in
              </Button>
            </Form.Item>
            {/* SignUp */}
            <Form.Item className="py-3">
              <span>Don't have an account?</span>
              <span className="text-blue-600">Sign up</span>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default loginPage;
