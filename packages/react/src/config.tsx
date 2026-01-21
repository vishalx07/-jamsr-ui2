import { AutocompleteConfig } from '@jamsrui/autocomplete';
import { BreadcrumbConfig } from '@jamsrui/breadcrumb';
import { ChartsConfig } from '@jamsrui/charts';
import { ClipboardConfig } from '@jamsrui/clipboard';
import { CollapsibleConfig } from '@jamsrui/collapsible';
import { DataGridConfig } from '@jamsrui/data-grid';
import { DateFieldConfig } from '@jamsrui/date-field';
import { DatePickerConfig } from '@jamsrui/date-picker';
import { DividerConfig } from '@jamsrui/divider';
import { EditorConfig } from '@jamsrui/editor';
import { FileUploadConfig } from '@jamsrui/file-upload';
import { HeaderConfig } from '@jamsrui/header';
import { IconButtonConfig } from '@jamsrui/icon-button';
import { KbdConfig } from '@jamsrui/kbd';
import { LinearProgressConfig } from '@jamsrui/linear-progress';
import { NumberFieldConfig } from '@jamsrui/number-field';
import { OtpInputConfig } from '@jamsrui/otp-input';
import { PaginationConfig } from '@jamsrui/pagination';
import { RatingConfig } from '@jamsrui/rating';
import { RippleConfig } from '@jamsrui/ripple';
import { SidebarConfig } from '@jamsrui/sidebar';
import { SkeletonConfig } from '@jamsrui/skeleton';
import { SliderConfig } from '@jamsrui/slider';
import { TableConfig } from '@jamsrui/table';
import { TabsConfig } from '@jamsrui/tabs';
import { TagsInputConfig } from '@jamsrui/tags-input';
import { TextConfig } from '@jamsrui/text';
import { TimeFieldConfig } from '@jamsrui/time-field';
import { ToastConfig } from '@jamsrui/toast';
import { ToggleConfig } from '@jamsrui/toggle';
import { TooltipConfig } from '@jamsrui/tooltip';

type Props = {
  children: React.ReactNode;
  autocomplete?: AutocompleteConfig.Props;
  breadcrumb?: BreadcrumbConfig.Props;
  charts?: ChartsConfig.Props;
  clipboard?: ClipboardConfig.Props;
  collapsible?: CollapsibleConfig.Props;
  dataGrid?: DataGridConfig.Props;
  dateField?: DateFieldConfig.Props;
  datePicker?: DatePickerConfig.Props;
  divider?: DividerConfig.Props;
  editor?: EditorConfig.Props;
  fileUpload?: FileUploadConfig.Props;
  header?: HeaderConfig.Props;
  iconButton?: IconButtonConfig.Props;
  kbd?: KbdConfig.Props;
  linearProgress?: LinearProgressConfig.Props;
  numberField?: NumberFieldConfig.Props;
  otpInput?: OtpInputConfig.Props;
  pagination?: PaginationConfig.Props;
  rating?: RatingConfig.Props;
  ripple?: RippleConfig.Props;
  sidebar?: SidebarConfig.Props;
  skeleton?: SkeletonConfig.Props;
  slider?: SliderConfig.Props;
  table?: TableConfig.Props;
  tabs?: TabsConfig.Props;
  tagsInput?: TagsInputConfig.Props;
  text?: TextConfig.Props;
  timeField?: TimeFieldConfig.Props;
  toast?: ToastConfig.Props;
  toggle?: ToggleConfig.Props;
  tooltip?: TooltipConfig.Props;
};

export const JamsrUIConfig = (props: Props) => {
  const { children } = props;
  return (
  <AutocompleteConfig {...props.autocomplete}>
  <BreadcrumbConfig {...props.breadcrumb}>
  <ChartsConfig {...props.charts}>
  <ClipboardConfig {...props.clipboard}>
  <CollapsibleConfig {...props.collapsible}>
  <DataGridConfig {...props.dataGrid}>
  <DateFieldConfig {...props.dateField}>
  <DatePickerConfig {...props.datePicker}>
  <DividerConfig {...props.divider}>
  <EditorConfig {...props.editor}>
  <FileUploadConfig {...props.fileUpload}>
  <HeaderConfig {...props.header}>
  <IconButtonConfig {...props.iconButton}>
  <KbdConfig {...props.kbd}>
  <LinearProgressConfig {...props.linearProgress}>
  <NumberFieldConfig {...props.numberField}>
  <OtpInputConfig {...props.otpInput}>
  <PaginationConfig {...props.pagination}>
  <RatingConfig {...props.rating}>
  <RippleConfig {...props.ripple}>
  <SidebarConfig {...props.sidebar}>
  <SkeletonConfig {...props.skeleton}>
  <SliderConfig {...props.slider}>
  <TableConfig {...props.table}>
  <TabsConfig {...props.tabs}>
  <TagsInputConfig {...props.tagsInput}>
  <TextConfig {...props.text}>
  <TimeFieldConfig {...props.timeField}>
  <ToastConfig {...props.toast}>
  <ToggleConfig {...props.toggle}>
  <TooltipConfig {...props.tooltip}>
    {children}
  </TooltipConfig>
  </ToggleConfig>
  </ToastConfig>
  </TimeFieldConfig>
  </TextConfig>
  </TagsInputConfig>
  </TabsConfig>
  </TableConfig>
  </SliderConfig>
  </SkeletonConfig>
  </SidebarConfig>
  </RippleConfig>
  </RatingConfig>
  </PaginationConfig>
  </OtpInputConfig>
  </NumberFieldConfig>
  </LinearProgressConfig>
  </KbdConfig>
  </IconButtonConfig>
  </HeaderConfig>
  </FileUploadConfig>
  </EditorConfig>
  </DividerConfig>
  </DatePickerConfig>
  </DateFieldConfig>
  </DataGridConfig>
  </CollapsibleConfig>
  </ClipboardConfig>
  </ChartsConfig>
  </BreadcrumbConfig>
  </AutocompleteConfig>
  );
};
