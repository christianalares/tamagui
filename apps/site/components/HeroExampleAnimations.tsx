import { animations } from '@tamagui/config-base'
import { useOnIntersecting } from '@tamagui/demos'
import { ArrowDown } from '@tamagui/feather-icons'
import Link from 'next/link'
import React, { memo, useRef, useState } from 'react'
import { Button, Paragraph, Separator, Theme, XStack, YStack } from 'tamagui'

import { AnimationsDemo } from './AnimationsDemo'
import { CodeDemoPreParsed } from './CodeDemoPreParsed'
import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { HomeH2, HomeH3 } from './HomeH2'

const animationDescriptions = [
  {
    name: 'Bouncy',
    description: 'A bouncy spring',
    animation: 'bouncy',
    settings: animations.animations.bouncy,
  },
  {
    name: 'Lazy',
    description: 'A lazy, straightforward spring',
    animation: 'lazy',
    settings: animations.animations.lazy,
  },
  {
    name: 'Quick',
    description: 'A super fast spring',
    animation: 'quick',
    settings: animations.animations.quick,
  },
] as const

let hasScrolledOnce = false

export function HeroExampleAnimations({ animationCode }) {
  const { tint } = useTint()
  const [disableScrollPane, setDisableScrollPane] = useState(true)

  return (
    <YStack>
      <ContainerLarge position="relative" space="$8">
        <YStack zi={1} space="$3">
          <HomeH2 pos="relative">
            Universal <span className="rainbow clip-text">Animations</span>
          </HomeH2>
          <HomeH3>
            Better platform targeting with animation drivers that can be changed without changing
            code.
          </HomeH3>
        </YStack>

        <XStack>
          <YStack
            f={2}
            miw="55%"
            als="center"
            mr="$-2"
            bc="$backgroundHover"
            zi={100}
            elevation="$4"
            br="$4"
            theme={tint}
          >
            <ExampleAnimations />
          </YStack>

          <YStack
            perspective={1000}
            rotateY="-5deg"
            x={-10}
            $sm={{ display: 'none' }}
            pos="relative"
            br="$8"
            elevation="$5"
            ov="hidden"
          >
            <YStack
              pe={disableScrollPane ? 'auto' : 'none'}
              o={disableScrollPane ? 1 : 0}
              fullscreen
              ai="center"
              jc="center"
            >
              <YStack fullscreen top="60%" o={0.5} />
              <Button
                accessibilityLabel="View more"
                y={200}
                iconAfter={ArrowDown}
                size="$4"
                themeInverse
                zi={10}
                onPress={() => setDisableScrollPane(false)}
              >
                View more
              </Button>
            </YStack>

            <CodeDemoPreParsed
              pe={disableScrollPane ? 'none' : 'auto'}
              maxHeight={500}
              height={500}
              maxWidth={530}
              minWidth={530}
              language="tsx"
              source={animationCode}
            />
          </YStack>
        </XStack>

        <XStack als="center" space="$3">
          <Link href="/docs/core/animations#css" passHref>
            <Button accessibilityLabel="CSS docs" fontFamily="$silkscreen" theme={tint} tag="a">
              CSS &raquo;
            </Button>
          </Link>
          <Link href="/docs/core/animations#reanimated" passHref>
            <Button accessibilityLabel="Reanimated docs" fontFamily="$silkscreen" tag="a">
              Reanimated &raquo;
            </Button>
          </Link>
          <Link href="/docs/core/animations" passHref>
            <Button accessibilityLabel="Animation docs" fontFamily="$silkscreen" tag="a">
              Docs &raquo;
            </Button>
          </Link>
        </XStack>
      </ContainerLarge>
    </YStack>
  )
}

export const ExampleAnimations = memo(() => {
  const [animationI, setAnimationI] = useState(0)
  const animation = animationDescriptions[animationI]
  const container = useRef(null)
  const [positionI, setPositionI] = useState(2)
  const next = (to = 1) => {
    setPositionI((x) => (x + to) % 3)
  }

  const settings =
    typeof animation.settings === 'string'
      ? [['transition', animation.settings]]
      : Object.entries(animation.settings)

  useOnIntersecting(container, ({ isIntersecting, dispose }) => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        next()
      }
      if (e.key === 'ArrowLeft') {
        next(-1)
      }
    }

    if (isIntersecting) {
      if (!hasScrolledOnce) {
        hasScrolledOnce = true
        // setting a long timeout extends the total render time a lot.., just slow down animation
        next()
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
      }
    } else {
      dispose?.()
    }
  })

  return (
    <XStack
      bw={1}
      boc="$borderColor"
      elevation="$1"
      w="100%"
      br="$4"
      ov="hidden"
      h={305}
      als="center"
      x={0}
      flexDirection="row-reverse"
    >
      <YStack
        ref={container}
        pos="relative"
        bc="$background"
        ai="center"
        jc="center"
        width="60%"
        $sm={{ width: '100%' }}
      >
        <AnimationsDemo position={positionI} animation={animation.animation} />
      </YStack>

      <Separator vertical />

      <YStack pos="relative" $sm={{ display: 'none' }} width="40%">
        <YStack fullscreen zi={-1} theme="alt2" bc="$backgroundPress" />
        <YStack f={1}>
          {animationDescriptions.map((item, i) => {
            const isActive = item === animation
            return (
              <Theme key={item.name} name={isActive ? 'active' : 'alt2'}>
                <YStack
                  {...(isActive && {
                    bc: '$backgroundHover',
                  })}
                  px="$4"
                  py="$2"
                  cursor="pointer"
                  hoverStyle={{
                    bc: '$backgroundHover',
                  }}
                  onPress={() => {
                    setAnimationI(i)
                    next()
                  }}
                >
                  <Paragraph
                    mb="$-1"
                    selectable={false}
                    cursor="inherit"
                    size="$3"
                    fontWeight="800"
                  >
                    {item.name}
                  </Paragraph>
                  <Paragraph
                    ellipse
                    selectable={false}
                    size="$2"
                    cursor="inherit"
                    color="$colorPress"
                  >
                    {item.description}
                  </Paragraph>
                </YStack>
              </Theme>
            )
          })}
        </YStack>

        <Separator />

        <XStack bc="$background" p="$4" ai="center" jc="center">
          {settings.map(([key, value], i) => {
            if (key === 'type') {
              return null
            }
            return (
              <React.Fragment key={key}>
                <YStack>
                  <Paragraph size="$2">{key}</Paragraph>
                  <Paragraph>{value}</Paragraph>
                </YStack>
                {i < settings.length - 1 && <Separator vertical mx={15} />}
              </React.Fragment>
            )
          })}
        </XStack>
      </YStack>
    </XStack>
  )
})
