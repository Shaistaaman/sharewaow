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
import { Clothes, Users } from "../models";
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
export default function ClothesUpdateForm(props) {
  const {
    id: idProp,
    clothes: clothesModelProp,
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
    UsersClothes: undefined,
    title: "",
    expire_clothes: "",
  };
  const [image, setImage] = React.useState(initialValues.image);
  const [condition, setCondition] = React.useState(initialValues.condition);
  const [price, setPrice] = React.useState(initialValues.price);
  const [UsersClothes, setUsersClothes] = React.useState(
    initialValues.UsersClothes
  );
  const [title, setTitle] = React.useState(initialValues.title);
  const [expire_clothes, setExpire_clothes] = React.useState(
    initialValues.expire_clothes
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = clothesRecord
      ? { ...initialValues, ...clothesRecord, UsersClothes }
      : initialValues;
    setImage(cleanValues.image);
    setCondition(cleanValues.condition);
    setPrice(cleanValues.price);
    setUsersClothes(cleanValues.UsersClothes);
    setCurrentUsersClothesValue(undefined);
    setCurrentUsersClothesDisplayValue("");
    setTitle(cleanValues.title);
    setExpire_clothes(cleanValues.expire_clothes);
    setErrors({});
  };
  const [clothesRecord, setClothesRecord] = React.useState(clothesModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Clothes, idProp)
        : clothesModelProp;
      setClothesRecord(record);
      const UsersClothesRecord = record ? await record.UsersClothes : undefined;
      setUsersClothes(UsersClothesRecord);
    };
    queryData();
  }, [idProp, clothesModelProp]);
  React.useEffect(resetStateValues, [clothesRecord, UsersClothes]);
  const [currentUsersClothesDisplayValue, setCurrentUsersClothesDisplayValue] =
    React.useState("");
  const [currentUsersClothesValue, setCurrentUsersClothesValue] =
    React.useState(undefined);
  const UsersClothesRef = React.createRef();
  const getIDValue = {
    UsersClothes: (r) => JSON.stringify({ id: r?.id }),
  };
  const UsersClothesIdSet = new Set(
    Array.isArray(UsersClothes)
      ? UsersClothes.map((r) => getIDValue.UsersClothes?.(r))
      : getIDValue.UsersClothes?.(UsersClothes)
  );
  const usersRecords = useDataStoreBinding({
    type: "collection",
    model: Users,
  }).items;
  const getDisplayValue = {
    UsersClothes: (r) =>
      `${r?.first_name ? r?.first_name + " - " : ""}${r?.id}`,
  };
  const validations = {
    image: [{ type: "Required" }, { type: "URL" }],
    condition: [{ type: "Required" }],
    price: [{ type: "Required" }],
    UsersClothes: [],
    title: [{ type: "Required" }],
    expire_clothes: [],
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
          UsersClothes,
          title,
          expire_clothes,
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
            Clothes.copyOf(clothesRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.UsersClothes) {
                updated.clothesUsersClothesId = undefined;
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
      {...getOverrideProps(overrides, "ClothesUpdateForm")}
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
              UsersClothes,
              title,
              expire_clothes,
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
              UsersClothes,
              title,
              expire_clothes,
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
              UsersClothes,
              title,
              expire_clothes,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              image,
              condition,
              price,
              UsersClothes: value,
              title,
              expire_clothes,
            };
            const result = onChange(modelFields);
            value = result?.UsersClothes ?? value;
          }
          setUsersClothes(value);
          setCurrentUsersClothesValue(undefined);
          setCurrentUsersClothesDisplayValue("");
        }}
        currentFieldValue={currentUsersClothesValue}
        label={"Users clothes"}
        items={UsersClothes ? [UsersClothes] : []}
        hasError={errors?.UsersClothes?.hasError}
        errorMessage={errors?.UsersClothes?.errorMessage}
        getBadgeText={getDisplayValue.UsersClothes}
        setFieldValue={(model) => {
          setCurrentUsersClothesDisplayValue(
            model ? getDisplayValue.UsersClothes(model) : ""
          );
          setCurrentUsersClothesValue(model);
        }}
        inputFieldRef={UsersClothesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Users clothes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Users"
          value={currentUsersClothesDisplayValue}
          options={usersRecords
            .filter((r) => !UsersClothesIdSet.has(getIDValue.UsersClothes?.(r)))
            .map((r) => ({
              id: getIDValue.UsersClothes?.(r),
              label: getDisplayValue.UsersClothes?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUsersClothesValue(
              usersRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUsersClothesDisplayValue(label);
            runValidationTasks("UsersClothes", label);
          }}
          onClear={() => {
            setCurrentUsersClothesDisplayValue("");
          }}
          defaultValue={UsersClothes}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.UsersClothes?.hasError) {
              runValidationTasks("UsersClothes", value);
            }
            setCurrentUsersClothesDisplayValue(value);
            setCurrentUsersClothesValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("UsersClothes", currentUsersClothesDisplayValue)
          }
          errorMessage={errors.UsersClothes?.errorMessage}
          hasError={errors.UsersClothes?.hasError}
          ref={UsersClothesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "UsersClothes")}
        ></Autocomplete>
      </ArrayField>
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
              UsersClothes,
              title: value,
              expire_clothes,
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
        label="Expire clothes"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={expire_clothes && convertToLocal(new Date(expire_clothes))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              image,
              condition,
              price,
              UsersClothes,
              title,
              expire_clothes: value,
            };
            const result = onChange(modelFields);
            value = result?.expire_clothes ?? value;
          }
          if (errors.expire_clothes?.hasError) {
            runValidationTasks("expire_clothes", value);
          }
          setExpire_clothes(value);
        }}
        onBlur={() => runValidationTasks("expire_clothes", expire_clothes)}
        errorMessage={errors.expire_clothes?.errorMessage}
        hasError={errors.expire_clothes?.hasError}
        {...getOverrideProps(overrides, "expire_clothes")}
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
          isDisabled={!(idProp || clothesModelProp)}
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
              !(idProp || clothesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
