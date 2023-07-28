/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Rides, Users } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function RidesUpdateForm(props) {
  const {
    id: idProp,
    rides: ridesModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    image: "",
    price_per_seat: "",
    title: "",
    no_of_seats: "",
    UsersRides: undefined,
    male_seats: "",
    female_seats: "",
    date_to_leave: "",
    time_to_leave: "",
    ride_destination: "",
    ride_from: "",
    expire_ride: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [price_per_seat, setPrice_per_seat] = React.useState(
    initialValues.price_per_seat
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [no_of_seats, setNo_of_seats] = React.useState(
    initialValues.no_of_seats
  );
  const [UsersRides, setUsersRides] = React.useState(initialValues.UsersRides);
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
  const [ride_destination, setRide_destination] = React.useState(
    initialValues.ride_destination
  );
  const [ride_from, setRide_from] = React.useState(initialValues.ride_from);
  const [expire_ride, setExpire_ride] = React.useState(
    initialValues.expire_ride
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ridesRecord
      ? { ...initialValues, ...ridesRecord, UsersRides }
      : initialValues;
    setImage(cleanValues.image);
    setPrice_per_seat(cleanValues.price_per_seat);
    setTitle(cleanValues.title);
    setNo_of_seats(cleanValues.no_of_seats);
    setUsersRides(cleanValues.UsersRides);
    setCurrentUsersRidesValue(undefined);
    setCurrentUsersRidesDisplayValue("");
    setMale_seats(cleanValues.male_seats);
    setFemale_seats(cleanValues.female_seats);
    setDate_to_leave(cleanValues.date_to_leave);
    setTime_to_leave(cleanValues.time_to_leave);
    setRide_destination(cleanValues.ride_destination);
    setRide_from(cleanValues.ride_from);
    setExpire_ride(cleanValues.expire_ride);
    setErrors({});
  };
  const [ridesRecord, setRidesRecord] = React.useState(ridesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Rides, idProp)
        : ridesModelProp;
      setRidesRecord(record);
      const UsersRidesRecord = record ? await record.UsersRides : undefined;
      setUsersRides(UsersRidesRecord);
    };
    queryData();
  }, [idProp, ridesModelProp]);
  React.useEffect(resetStateValues, [ridesRecord, UsersRides]);
  const [currentUsersRidesDisplayValue, setCurrentUsersRidesDisplayValue] =
    React.useState("");
  const [currentUsersRidesValue, setCurrentUsersRidesValue] =
    React.useState(undefined);
  const UsersRidesRef = React.createRef();
  const getIDValue = {
    UsersRides: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersRidesIdSet = new Set(
    Array.isArray(UsersRides)
      ? UsersRides.map((r) => getIDValue.UsersRides?.(r))
      : getIDValue.UsersRides?.(UsersRides)
  );
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const getDisplayValue = {
    UsersRides: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    image: [{ type: "Required" }, { type: "URL" }],
    price_per_seat: [{ type: "Required" }],
    title: [{ type: "Required" }],
    no_of_seats: [{ type: "Required" }],
    UsersRides: [],
    male_seats: [{ type: "Required" }],
    female_seats: [{ type: "Required" }],
    date_to_leave: [{ type: "Required" }],
    time_to_leave: [{ type: "Required" }],
    ride_destination: [{ type: "Required" }],
    ride_from: [{ type: "Required" }],
    expire_ride: [],
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
          image,
          price_per_seat,
          title,
          no_of_seats,
          UsersRides,
          male_seats,
          female_seats,
          date_to_leave,
          time_to_leave,
          ride_destination,
          ride_from,
          expire_ride,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
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
          await DataStore.save(
            Rides.copyOf(ridesRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.UsersRides) {
                updated.ridesUsersRidesId = undefined;
              }
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "RidesUpdateForm")}
      {...rest}
    >
      <TextField
        label="Image"
        isRequired={true}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image: value,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Price per seat"
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
              image,
              price_per_seat: value,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title: value,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
      <TextField
        label="No of seats"
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
              image,
              price_per_seat,
              title,
              no_of_seats: value,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides: value,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
            };
            const result = onChange(modelFields);
            value = result?.UsersRides ?? value;
          }
          setUsersRides(value);
          setCurrentUsersRidesValue(undefined);
          setCurrentUsersRidesDisplayValue("");
        }}
        currentFieldValue={currentUsersRidesValue}
        label={"Users rides"}
        items={UsersRides ? [UsersRides] : []}
        hasError={errors?.UsersRides?.hasError}
        errorMessage={errors?.UsersRides?.errorMessage}
        getBadgeText={getDisplayValue.UsersRides}
        setFieldValue={(model) => {
          setCurrentUsersRidesDisplayValue(
            model ? getDisplayValue.UsersRides(model) : ""
          );
          setCurrentUsersRidesValue(model);
        }}
        inputFieldRef={UsersRidesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users rides"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentUsersRidesDisplayValue}
          options={usersRecords
            .filter((r) => !UsersRidesIdSet.has(getIDValue.UsersRides?.(r)))
            .map((r) => ({
              id: getIDValue.UsersRides?.(r),
              label: getDisplayValue.UsersRides?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersRidesValue(
              usersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsersRidesDisplayValue(label);
            runValidationTasks("UsersRides", label);
          }}
          onClear={() => {
            setCurrentUsersRidesDisplayValue("");
          }}
          defaultValue={UsersRides}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UsersRides?.hasError) {
              runValidationTasks("UsersRides", value);
            }
            setCurrentUsersRidesDisplayValue(value);
            setCurrentUsersRidesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("UsersRides", currentUsersRidesDisplayValue)
          }
          errorMessage={errors.UsersRides?.errorMessage}
          hasError={errors.UsersRides?.hasError}
          ref={UsersRidesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "UsersRides")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Male seats"
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
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats: value,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
        label="Female seats"
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
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats: value,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
      <TextField
        label="Date to leave"
        isRequired={true}
        isReadOnly={false}
        type="date"
        value={date_to_leave}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave: value,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride,
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
        label="Time to leave"
        isRequired={true}
        isReadOnly={false}
        type="time"
        value={time_to_leave}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave: value,
              ride_destination,
              ride_from,
              expire_ride,
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
      <SelectField
        label="Ride destination"
        placeholder="Please select an option"
        isDisabled={false}
        value={ride_destination}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination: value,
              ride_from,
              expire_ride,
            };
            const result = onChange(modelFields);
            value = result?.ride_destination ?? value;
          }
          if (errors.ride_destination?.hasError) {
            runValidationTasks("ride_destination", value);
          }
          setRide_destination(value);
        }}
        onBlur={() => runValidationTasks("ride_destination", ride_destination)}
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
      <SelectField
        label="Ride from"
        placeholder="Please select an option"
        isDisabled={false}
        value={ride_from}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from: value,
              expire_ride,
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
              image,
              price_per_seat,
              title,
              no_of_seats,
              UsersRides,
              male_seats,
              female_seats,
              date_to_leave,
              time_to_leave,
              ride_destination,
              ride_from,
              expire_ride: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ridesModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ridesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
