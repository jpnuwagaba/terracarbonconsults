/* eslint-disable react-hooks/refs -- Sanity custom inputs pass input refs through elementProps. */
import {Autocomplete, Card, Flex, Text} from '@sanity/ui'
import {useCallback} from 'react'
import {set, unset, type StringInputProps} from 'sanity'

import {lucideIconOptions, type LucideIconOption} from './lucideIconOptions'

const normalizeSearch = (value: string) => value.trim().toLowerCase().replace(/[\s_]+/g, '-')

const filterIconOption = (query: string, option: LucideIconOption) => {
  const normalizedQuery = normalizeSearch(query)

  if (!normalizedQuery) {
    return true
  }

  return option.searchableText.includes(normalizedQuery)
}

const renderIconOption = (option: LucideIconOption) => {
  const Icon = option.Icon

  return (
    <Card data-as="button" padding={3} radius={2} tone="inherit">
      <Flex align="center" gap={3}>
        <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
        <Text size={1} textOverflow="ellipsis">
          {option.title}
        </Text>
      </Flex>
    </Card>
  )
}

const renderIconValue = (value: string, option?: LucideIconOption) => option?.title ?? value

export const LucideIconInput = (props: StringInputProps) => {
  const {elementProps, onChange, readOnly, validationError, value} = props

  const handleChange = useCallback(
    (nextValue: string) => {
      onChange(nextValue ? set(nextValue) : unset())
    },
    [onChange],
  )

  return (
    <Autocomplete<LucideIconOption>
      customValidity={validationError}
      filterOption={filterIconOption}
      fontSize={2}
      id={elementProps.id}
      onBlur={elementProps.onBlur}
      onChange={handleChange}
      onFocus={elementProps.onFocus}
      openButton
      openOnFocus
      options={lucideIconOptions}
      padding={3}
      placeholder={elementProps.placeholder ?? 'Search Lucide icons...'}
      radius={2}
      readOnly={readOnly || elementProps.readOnly}
      ref={elementProps.ref}
      renderOption={renderIconOption}
      renderValue={renderIconValue}
      value={value ?? ''}
    />
  )
}
