import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { DESTINATIONCALENDAR_TITLE_FIELD } from "../destinationCalendar/DestinationCalendarTitle";
import { VERIFICATIONTOKEN_TITLE_FIELD } from "./VerificationTokenTitle";

export const VerificationTokenShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Expires" source="expires" />
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />
        <TextField label="Token" source="token" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="verificationTokenId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <BooleanField
              label="Allow Dynamic Booking"
              source="allowDynamicBooking"
            />
            <TextField label="Avatar" source="avatar" />
            <BooleanField label="Away" source="away" />
            <TextField label="Bio" source="bio" />
            <TextField label="Brand Color" source="brandColor" />
            <TextField label="Buffer Time" source="bufferTime" />
            <BooleanField
              label="Completed Onboarding"
              source="completedOnboarding"
            />
            <DateField source="createdDate" label="Created Date" />
            <TextField label="Dark Brand Color" source="darkBrandColor" />
            <TextField label="Default Schedule Id" source="defaultScheduleId" />
            <ReferenceField
              label="Destination Calendar"
              source="destinationcalendar.id"
              reference="DestinationCalendar"
            >
              <TextField source={DESTINATIONCALENDAR_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField
              label="Disable Impersonation"
              source="disableImpersonation"
            />
            <TextField label="Email" source="email" />
            <TextField label="Email Verified" source="emailVerified" />
            <TextField label="End Time" source="endTime" />
            <BooleanField label="Hide Branding" source="hideBranding" />
            <TextField label="ID" source="id" />
            <TextField label="Identity Provider" source="identityProvider" />
            <TextField
              label="Identity Provider Id"
              source="identityProviderId"
            />
            <TextField label="Invited To" source="invitedTo" />
            <TextField label="Locale" source="locale" />
            <TextField label="Metadata" source="metadata" />
            <TextField label="Name" source="name" />
            <TextField label="Password" source="password" />
            <TextField label="Plan" source="plan" />
            <TextField label="Role" source="role" />
            <TextField label="Start Time" source="startTime" />
            <TextField label="Theme" source="theme" />
            <TextField label="Time Format" source="timeFormat" />
            <TextField label="Time Zone" source="timeZone" />
            <TextField label="Trial Ends At" source="trialEndsAt" />
            <BooleanField
              label="Two Factor Enabled"
              source="twoFactorEnabled"
            />
            <TextField label="Two Factor Secret" source="twoFactorSecret" />
            <TextField label="Username" source="username" />
            <ReferenceField
              label="Verification Token"
              source="verificationtoken.id"
              reference="VerificationToken"
            >
              <TextField source={VERIFICATIONTOKEN_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="Verified" source="verified" />
            <TextField label="Week Start" source="weekStart" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
