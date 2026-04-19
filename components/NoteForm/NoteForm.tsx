import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./NoteForm.module.css";

const schema = Yup.object({
  title: Yup.string().min(3).max(50).required(),
  content: Yup.string().max(500),
  tag: Yup.string().required(),
});

export default function NoteForm({ onSubmit }: any) {
  return (
    <Formik
      initialValues={{ title: "", content: "", tag: "Todo" }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <Field name="title" />
        <Field name="content" as="textarea" />
        <Field name="tag" as="select">
          <option value="Todo">Todo</option>
          <option value="Work">Work</option>
        </Field>

        <button type="submit">Create note</button>
      </Form>
    </Formik>
  );
}