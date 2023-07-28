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
import { Books, Users } from "../models";
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
export default function BooksCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    condition: "",
    price: "",
    title: "",
    UsersBooks: undefined,
    expire_books: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [price, setPrice] = React.useState(initialValues.price);
  const [title, setTitle] = React.useState(initialValues.title);
  const [UsersBooks, setUsersBooks] = React.useState(initialValues.UsersBooks);
  const [expire_books, setExpire_books] = React.useState(
    initialValues.expire_books
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setImage(initialValues.image);
    setCondition(initialValues.condition);
    setPrice(initialValues.price);
    setTitle(initialValues.title);
    setUsersBooks(initialValues.UsersBooks);
    setCurrentUsersBooksValue(undefined);
    setCurrentUsersBooksDisplayValue("");
    setExpire_books(initialValues.expire_books);
    setErrors({});
  };
  const [currentUsersBooksDisplayValue, setCurrentUsersBooksDisplayValue] =
    React.useState("");
  const [currentUsersBooksValue, setCurrentUsersBooksValue] =
    React.useState(undefined);
  const UsersBooksRef = React.createRef();
  const getIDValue = {
    UsersBooks: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersBooksIdSet = new Set(
    Array.isArray(UsersBooks)
      ? UsersBooks.map((r) => getIDValue.UsersBooks?.(r))
      : getIDValue.UsersBooks?.(UsersBooks)
  );
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const getDisplayValue = {
    UsersBooks: (r) => `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    image: [{ type: "Required" }, { type: "URL" }],
    condition: [{ type: "Required" }],
    price: [{ type: "Required" }],
    title: [{ type: "Required" }],
    UsersBooks: [],
    expire_books: [],
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
          condition,
          price,
          title,
          UsersBooks,
          expire_books,
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
          await DataStore.save(new Books(modelFields));
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
      {...getOverrideProps(overrides, "BooksCreateForm")}
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
              condition,
              price,
              title,
              UsersBooks,
              expire_books,
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
      <SelectField
        label="Condition"
        placeholder="Please select an option"
        isDisabled={false}
        value={condition}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              image,
              condition: value,
              price,
              title,
              UsersBooks,
              expire_books,
            };
            const result = onChange(modelFields);
            value = result?.condition ?? value;
          }
          if (errors.condition?.hasError) {
            runValidationTasks("condition", value);
          }
          setCondition(value);
        }}
        onBlur={() => runValidationTasks("condition", condition)}
        errorMessage={errors.condition?.errorMessage}
        hasError={errors.condition?.hasError}
        {...getOverrideProps(overrides, "condition")}
      >
        <option
          children="New"
          value="NEW"
          {...getOverrideProps(overrides, "conditionoption0")}
        ></option>
        <option
          children="Used"
          value="USED"
          {...getOverrideProps(overrides, "conditionoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              image,
              condition,
              price: value,
              title,
              UsersBooks,
              expire_books,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
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
              condition,
              price,
              title: value,
              UsersBooks,
              expire_books,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              image,
              condition,
              price,
              title,
              UsersBooks: value,
              expire_books,
            };
            const result = onChange(modelFields);
            value = result?.UsersBooks ?? value;
          }
          setUsersBooks(value);
          setCurrentUsersBooksValue(undefined);
          setCurrentUsersBooksDisplayValue("");
        }}
        currentFieldValue={currentUsersBooksValue}
        label={"Users books"}
        items={UsersBooks ? [UsersBooks] : []}
        hasError={errors?.UsersBooks?.hasError}
        errorMessage={errors?.UsersBooks?.errorMessage}
        getBadgeText={getDisplayValue.UsersBooks}
        setFieldValue={(model) => {
          setCurrentUsersBooksDisplayValue(
            model ? getDisplayValue.UsersBooks(model) : ""
          );
          setCurrentUsersBooksValue(model);
        }}
        inputFieldRef={UsersBooksRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users books"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentUsersBooksDisplayValue}
          options={usersRecords
            .filter((r) => !UsersBooksIdSet.has(getIDValue.UsersBooks?.(r)))
            .map((r) => ({
              id: getIDValue.UsersBooks?.(r),
              label: getDisplayValue.UsersBooks?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersBooksValue(
              usersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsersBooksDisplayValue(label);
            runValidationTasks("UsersBooks", label);
          }}
          onClear={() => {
            setCurrentUsersBooksDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UsersBooks?.hasError) {
              runValidationTasks("UsersBooks", value);
            }
            setCurrentUsersBooksDisplayValue(value);
            setCurrentUsersBooksValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("UsersBooks", currentUsersBooksDisplayValue)
          }
          errorMessage={errors.UsersBooks?.errorMessage}
          hasError={errors.UsersBooks?.hasError}
          ref={UsersBooksRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "UsersBooks")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Expire books"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={expire_books && convertToLocal(new Date(expire_books))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              image,
              condition,
              price,
              title,
              UsersBooks,
              expire_books: value,
            };
            const result = onChange(modelFields);
            value = result?.expire_books ?? value;
          }
          if (errors.expire_books?.hasError) {
            runValidationTasks("expire_books", value);
          }
          setExpire_books(value);
        }}
        onBlur={() => runValidationTasks("expire_books", expire_books)}
        errorMessage={errors.expire_books?.errorMessage}
        hasError={errors.expire_books?.hasError}
        {...getOverrideProps(overrides, "expire_books")}
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
