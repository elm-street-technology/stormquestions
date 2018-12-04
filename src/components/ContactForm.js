import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import withStyles from "elevate-ui/withStyles";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formState: null,
    };
  }

  render() {
    const { formState } = this.state;
    const { classes, className } = this.props;

    if (formState === "success") {
      return (
        <div
          style={{
            maxWidth: "400px",
            textAlign: "center",
            margin: "24px auto",
          }}
        >
          <Alert color="success">Thank You! We will be in touch shortly.</Alert>
        </div>
      );
    } else if (formState === "error") {
      return (
        <div style={{ maxWidth: "400px", margin: "24px auto" }}>
          <Alert color="error">
            An error occurred. Please try again later.
          </Alert>
        </div>
      );
    }

    return (
      <div className={classNames(classes.root, className)}>
        <h1 className={classes.heading}>Contact us</h1>
        <h2 className={classes.subHeading}>
          Get in touch and let us know how we can help you.
        </h2>
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
          }}
          validationSchema={() =>
            Yup.object().shape({
              firstname: Yup.string().required("First name is required"),
              lastname: Yup.string().required("Last name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              phone: Yup.string().required("Phone is required"),
            })
          }
          onSubmit={(values, { setSubmitting }) => {
            // Manually submit the form using a regular form POST rather than AJAX
            // document.getElementById("contact").submit();
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                this.setState({ formState: "success" });
              })
              .catch((error) => {
                console.error(error);
                this.setState({ formState: "error" });
              });
          }}
          render={({ values, isSubmitting }) => (
            <Form
              noValidate
              id="contact"
              name="contact"
              method="post"
              data-netlify="true"
            >
              <div className={classes.topRow}>
                <Field
                  id="firstname"
                  name="firstname"
                  label="First Name"
                  component={Input}
                  className={classes.field}
                />
                <Field
                  id="lastname"
                  name="lastname"
                  label="Last Name"
                  component={Input}
                  className={classes.field}
                />
              </div>
              <Field
                id="email"
                name="email"
                label="Email"
                component={Input}
                className={classes.field}
              />
              <Field
                id="phone"
                name="phone"
                label="Phone"
                component={Input}
                className={classes.field}
                type="tel"
              />
              <button
                type="submit"
                className={classes.signUpBtn}
                disabled={isSubmitting}
              >
                Contact us
              </button>
            </Form>
          )}
        />
      </div>
    );
  }
}

export default withStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "500px",
    backgroundColor: "#FFF !important",
    margin: "0 auto",
    padding: "60px 12px",
  },
  link: {
    color: "inherit",
  },
  field: {
    borderRadius: "6px",
    border: "2px solid #C0C6CD",
    height: "50px",
    fontWeight: "600",
  },
  topRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    "& > * + *": {
      marginLeft: "12px",
    },
  },
  signUpBtn: {
    width: "100%",
    fontSize: "20px",
    lineHeight: "26px",
    fontWeight: "600",
    color: "#FFF",
    backgroundColor: theme.colors.primary,
    borderRadius: "6px",
    padding: "12px",
    margin: "14px 0",
  },
  heading: {
    color: theme.colors.black,
    lineHeight: "1.4",
    fontSize: "26px",
    fontWeight: "700",
    fontFamily: "League Spartan",
    textAlign: "center",
    paddingBottom: "6px",
  },
  subHeading: {
    color: theme.colors.gray600,
    fontSize: "21px",
    padding: "0px 0px 40px 0px",
    margin: "auto",
    lineHeight: "1.4",
    textAlign: "center",
  },
}))(ContactForm);
