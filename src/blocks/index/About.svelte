<script>
  import Article from '../../components/Article.svelte';
  import Block from '../../components/Block.svelte';
  import Container from '../../components/Container.svelte';
  import SvgIcon from '../../components/SvgIcon.svelte';
  import DiGasellIcon from '../../brands/di-gasell.svg';
</script>

<Block background="monkey">
  <Container relative fullWidth padding="none">
    <Container fullHeight center>
      <Article>
        <p>
          <strong>This is how we do it.</strong> For more than a decade, we have
          helped startups and incumbents grow like crazy by using our carefully balanced
          blend of digital strategy, software engineering and open source software.
        </p>
        <p>
          We are a team of 20+ senior software engineers, designers and digital
          strategists delivering scalable digital platforms for large e-commerce
          players and ambitious startups.
        </p>
      </Article>
    </Container>
    <span class="gasell">
      <SvgIcon icon={DiGasellIcon} />
    </span>
  </Container>
</Block>

<style>
  .gasell {
    position: absolute;
    height: 80px;
    left: var(--sideMargin);
    bottom: var(--sideMargin);
    mix-blend-mode: multiply;

    @media (max-width: 900px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
