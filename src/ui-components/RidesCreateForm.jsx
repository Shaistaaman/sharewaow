/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Rides } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function RidesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    no_of_seats: "",
    price_per_seat: "",
    male_seats: "",
    female_seats: "",
    date_to_leave: "",
    time_to_leave: "",
    ride_from: "",
    ride_destination: "",
    expire_ride: "",
    phone: "",
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [no_of_seats, setNo_of_seats] = React.useState(
    initialValues.no_of_seats
  );
  const [price_per_seat, setPrice_per_seat] = React.useState(
    initialValues.price_per_seat
  );
  const [male_seats, setMale_seats] = React.useState(initialValues.male_seats);
  const [female_seats, setFemale_seats] = React.useState(
    initialValues.female_seats
  );
  const [date_to_leave, setDate_to_leave] = React.useState(
    initialValues.date_to_leave
  );
  const [time_to_leave, setTime_to_leave] = React.useState(
    initialValues.time_to_leave
  );
  const [ride_from, setRide_from] = React.useState(initialValues.ride_from);
  const [ride_destination, setRide_destination] = React.useState(
    initialValues.ride_destination
  );
  const [expire_ride, setExpire_ride] = React.useState(
    initialValues.expire_ride
  );
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setTitle(initialValues.title);
    setNo_of_seats(initialValues.no_of_seats);
    setPrice_per_seat(initialValues.price_per_seat);
    setMale_seats(initialValues.male_seats);
    setFemale_seats(initialValues.female_seats);
    setDate_to_leave(initialValues.date_to_leave);
    setTime_to_leave(initialValues.time_to_leave);
    setRide_from(initialValues.ride_from);
    setRide_destination(initialValues.ride_destination);
    setExpire_ride(initialValues.expire_ride);
    setPhone(initialValues.phone);
    setErrors({});
  };
  const validations = {
    title: [{ type: "Required" }],
    no_of_seats: [{ type: "Required" }],
    price_per_seat: [{ type: "Required" }],
    male_seats: [{ type: "Required" }],
    female_seats: [{ type: "Required" }],
    date_to_leave: [{ type: "Required" }],
    time_to_leave: [{ type: "Required" }],
    ride_from: [{ type: "Required" }],
    ride_destination: [{ type: "Required" }],
    expire_ride: [],
    phone: [{ type: "Phone" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          title,
          no_of_seats,
          price_per_seat,
          male_seats,
          female_seats,
          date_to_leave,
          time_to_leave,
          ride_from,
          ride_destination,
          expire_ride,
          phone,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Rides(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RidesCreateForm")}
      {...rest}
    >
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid0")}
      >
        <Heading
          children="Enter Ride Details:"
          {...getOverrideProps(overrides, "SectionalElement0")}
        ></Heading>
        <Text
          children="All Fields manadatory"
          {...getOverrideProps(overrides, "SectionalElement1")}
        ></Text>
      </Grid>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Title</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              no_of_seats,
              price_per_seat,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_from,
              ride_destination,
              expire_ride,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid2")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>No of seats</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={no_of_seats}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats: value,
                price_per_seat,
                male_seats,
                female_seats,
                date_to_leave,
                time_to_leave,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.no_of_seats ?? value;
            }
            if (errors.no_of_seats?.hasError) {
              runValidationTasks("no_of_seats", value);
            }
            setNo_of_seats(value);
          }}
          onBlur={() => runValidationTasks("no_of_seats", no_of_seats)}
          errorMessage={errors.no_of_seats?.errorMessage}
          hasError={errors.no_of_seats?.hasError}
          {...getOverrideProps(overrides, "no_of_seats")}
        ></TextField>
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Price per seat</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={price_per_seat}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat: value,
                male_seats,
                female_seats,
                date_to_leave,
                time_to_leave,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.price_per_seat ?? value;
            }
            if (errors.price_per_seat?.hasError) {
              runValidationTasks("price_per_seat", value);
            }
            setPrice_per_seat(value);
          }}
          onBlur={() => runValidationTasks("price_per_seat", price_per_seat)}
          errorMessage={errors.price_per_seat?.errorMessage}
          hasError={errors.price_per_seat?.hasError}
          {...getOverrideProps(overrides, "price_per_seat")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid3")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Male seats</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={male_seats}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats: value,
                female_seats,
                date_to_leave,
                time_to_leave,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.male_seats ?? value;
            }
            if (errors.male_seats?.hasError) {
              runValidationTasks("male_seats", value);
            }
            setMale_seats(value);
          }}
          onBlur={() => runValidationTasks("male_seats", male_seats)}
          errorMessage={errors.male_seats?.errorMessage}
          hasError={errors.male_seats?.hasError}
          {...getOverrideProps(overrides, "male_seats")}
        ></TextField>
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Female seats</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="number"
          step="any"
          value={female_seats}
          onChange={(e) => {
            let value = isNaN(parseInt(e.target.value))
              ? e.target.value
              : parseInt(e.target.value);
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats,
                female_seats: value,
                date_to_leave,
                time_to_leave,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.female_seats ?? value;
            }
            if (errors.female_seats?.hasError) {
              runValidationTasks("female_seats", value);
            }
            setFemale_seats(value);
          }}
          onBlur={() => runValidationTasks("female_seats", female_seats)}
          errorMessage={errors.female_seats?.errorMessage}
          hasError={errors.female_seats?.hasError}
          {...getOverrideProps(overrides, "female_seats")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid4")}
      >
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Date to leave</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="date"
          value={date_to_leave}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats,
                female_seats,
                date_to_leave: value,
                time_to_leave,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.date_to_leave ?? value;
            }
            if (errors.date_to_leave?.hasError) {
              runValidationTasks("date_to_leave", value);
            }
            setDate_to_leave(value);
          }}
          onBlur={() => runValidationTasks("date_to_leave", date_to_leave)}
          errorMessage={errors.date_to_leave?.errorMessage}
          hasError={errors.date_to_leave?.hasError}
          {...getOverrideProps(overrides, "date_to_leave")}
        ></TextField>
        <TextField
          label={
            <span style={{ display: "inline-flex" }}>
              <span>Time to leave</span>
              <span style={{ color: "red" }}>*</span>
            </span>
          }
          isRequired={true}
          isReadOnly={false}
          type="time"
          value={time_to_leave}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats,
                female_seats,
                date_to_leave,
                time_to_leave: value,
                ride_from,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.time_to_leave ?? value;
            }
            if (errors.time_to_leave?.hasError) {
              runValidationTasks("time_to_leave", value);
            }
            setTime_to_leave(value);
          }}
          onBlur={() => runValidationTasks("time_to_leave", time_to_leave)}
          errorMessage={errors.time_to_leave?.errorMessage}
          hasError={errors.time_to_leave?.hasError}
          {...getOverrideProps(overrides, "time_to_leave")}
        ></TextField>
      </Grid>
      <Grid
        columnGap="inherit"
        rowGap="inherit"
        templateColumns="repeat(2, auto)"
        {...getOverrideProps(overrides, "RowGrid5")}
      >
        <SelectField
          label="Ride from"
          placeholder="Please select an option"
          isDisabled={false}
          value={ride_from}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats,
                female_seats,
                date_to_leave,
                time_to_leave,
                ride_from: value,
                ride_destination,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.ride_from ?? value;
            }
            if (errors.ride_from?.hasError) {
              runValidationTasks("ride_from", value);
            }
            setRide_from(value);
          }}
          onBlur={() => runValidationTasks("ride_from", ride_from)}
          errorMessage={errors.ride_from?.errorMessage}
          hasError={errors.ride_from?.hasError}
          {...getOverrideProps(overrides, "ride_from")}
        >
          <option
            children="Islamabad"
            value="ISLAMABAD"
            {...getOverrideProps(overrides, "ride_fromoption0")}
          ></option>
          <option
            children="Lahore"
            value="LAHORE"
            {...getOverrideProps(overrides, "ride_fromoption1")}
          ></option>
          <option
            children="Karachi"
            value="KARACHI"
            {...getOverrideProps(overrides, "ride_fromoption2")}
          ></option>
          <option
            children="Dikhan"
            value="DIKHAN"
            {...getOverrideProps(overrides, "ride_fromoption3")}
          ></option>
          <option
            children="Dgkhan"
            value="DGKHAN"
            {...getOverrideProps(overrides, "ride_fromoption4")}
          ></option>
          <option
            children="Faisalabad"
            value="FAISALABAD"
            {...getOverrideProps(overrides, "ride_fromoption5")}
          ></option>
          <option
            children="Hyderabad"
            value="HYDERABAD"
            {...getOverrideProps(overrides, "ride_fromoption6")}
          ></option>
          <option
            children="Multan"
            value="MULTAN"
            {...getOverrideProps(overrides, "ride_fromoption7")}
          ></option>
          <option
            children="Peshawar"
            value="PESHAWAR"
            {...getOverrideProps(overrides, "ride_fromoption8")}
          ></option>
          <option
            children="Gujaranwala"
            value="GUJARANWALA"
            {...getOverrideProps(overrides, "ride_fromoption9")}
          ></option>
          <option
            children="Quetta"
            value="QUETTA"
            {...getOverrideProps(overrides, "ride_fromoption10")}
          ></option>
        </SelectField>
        <SelectField
          label="Ride destination"
          placeholder="Please select an option"
          isDisabled={false}
          value={ride_destination}
          onChange={(e) => {
            let { value } = e.target;
            if (onChange) {
              const modelFields = {
                title,
                no_of_seats,
                price_per_seat,
                male_seats,
                female_seats,
                date_to_leave,
                time_to_leave,
                ride_from,
                ride_destination: value,
                expire_ride,
                phone,
              };
              const result = onChange(modelFields);
              value = result?.ride_destination ?? value;
            }
            if (errors.ride_destination?.hasError) {
              runValidationTasks("ride_destination", value);
            }
            setRide_destination(value);
          }}
          onBlur={() =>
            runValidationTasks("ride_destination", ride_destination)
          }
          errorMessage={errors.ride_destination?.errorMessage}
          hasError={errors.ride_destination?.hasError}
          {...getOverrideProps(overrides, "ride_destination")}
        >
          <option
            children="Islamabad"
            value="ISLAMABAD"
            {...getOverrideProps(overrides, "ride_destinationoption0")}
          ></option>
          <option
            children="Lahore"
            value="LAHORE"
            {...getOverrideProps(overrides, "ride_destinationoption1")}
          ></option>
          <option
            children="Karachi"
            value="KARACHI"
            {...getOverrideProps(overrides, "ride_destinationoption2")}
          ></option>
          <option
            children="Dikhan"
            value="DIKHAN"
            {...getOverrideProps(overrides, "ride_destinationoption3")}
          ></option>
          <option
            children="Dgkhan"
            value="DGKHAN"
            {...getOverrideProps(overrides, "ride_destinationoption4")}
          ></option>
          <option
            children="Faisalabad"
            value="FAISALABAD"
            {...getOverrideProps(overrides, "ride_destinationoption5")}
          ></option>
          <option
            children="Hyderabad"
            value="HYDERABAD"
            {...getOverrideProps(overrides, "ride_destinationoption6")}
          ></option>
          <option
            children="Multan"
            value="MULTAN"
            {...getOverrideProps(overrides, "ride_destinationoption7")}
          ></option>
          <option
            children="Peshawar"
            value="PESHAWAR"
            {...getOverrideProps(overrides, "ride_destinationoption8")}
          ></option>
          <option
            children="Gujaranwala"
            value="GUJARANWALA"
            {...getOverrideProps(overrides, "ride_destinationoption9")}
          ></option>
          <option
            children="Quetta"
            value="QUETTA"
            {...getOverrideProps(overrides, "ride_destinationoption10")}
          ></option>
        </SelectField>
      </Grid>
      <TextField
        label="Expire ride"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={expire_ride && convertToLocal(new Date(expire_ride))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              title,
              no_of_seats,
              price_per_seat,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_from,
              ride_destination,
              expire_ride: value,
              phone,
            };
            const result = onChange(modelFields);
            value = result?.expire_ride ?? value;
          }
          if (errors.expire_ride?.hasError) {
            runValidationTasks("expire_ride", value);
          }
          setExpire_ride(value);
        }}
        onBlur={() => runValidationTasks("expire_ride", expire_ride)}
        errorMessage={errors.expire_ride?.errorMessage}
        hasError={errors.expire_ride?.hasError}
        {...getOverrideProps(overrides, "expire_ride")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        placeholder="+923331234567"
        type="tel"
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              no_of_seats,
              price_per_seat,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_from,
              ride_destination,
              expire_ride,
              phone: value,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
