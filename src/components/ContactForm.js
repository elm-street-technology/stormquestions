import React, { Component } from "react";
import classNames from "classnames";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Alert from "elevate-ui/Alert";
import Input from "elevate-ui/Input";
import withStyles from "elevate-ui/withStyles";

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
          <Alert color="success">Thank You!</Alert>
        </div>
      );
    } else if (formState === "error") {
      return (
        <div style={{ maxWidth: "400px", margin: "24px auto" }}>
          <Alert color="error">An error occurred.</Alert>
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
            const body = {
              ...values,
              roleOther: values.role === "Other" ? values.roleOther : "", // Just in case the user had typed in roleOther then changed their role to something else
            };
            return fetch(
              "https://relegate.herokuapp.com/marketing/request-a-demo",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json; charset=utf-8",
                },
                body: JSON.stringify(body),
              }
            )
              .then((response) => response.json())
              .then((res) => {
                if (res.message === "ok") {
                  this.setState({ formState: "success" });
                } else {
                  this.setState({ formState: "error" });
                }
              })
              .catch((err) => {
                this.setState({ formState: "error" });
              });
          }}
          render={({ values, isSubmitting }) => (
            <Form noValidate>
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
    padding: "60px 0px",
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
    padding: "0px 14px 40px 14px",
    maxWidth: "520px",
    lineHeight: "1.4",
  },
}))(ContactForm);
