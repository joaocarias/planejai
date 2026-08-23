import {
  CalendarClock,
  CreditCardIcon,
  Goal,
  Landmark,
  PiggyBank,
  Wallet,
} from 'lucide-react'
import { useParams } from 'react-router-dom'

import { AIInsightsCard } from '@/components/features/SimulationResult/AlInsightCardProps'
import { Card } from '@/components/features/SimulationResult/Card'
import { PageHero } from '@/components/shared/PageHero'
import { useSimulationStorage } from '@/hooks/useSimulationStorage'
import { calcMonthlySavings } from '@/utils/simulation'

export function SimulationsResultsPage() {
  const { id } = useParams<{ id: string }>()
  const { getFormData } = useSimulationStorage()

  const data = id ? getFormData(id) : null

  if (!data) {
    return <p>Simulacação não encontrada</p>
  }

  const monthlySavings = calcMonthlySavings(data)

  return (
    <main className="max-w-6x1 mx-auto px-4 py-10 sm:py-14">
      <PageHero
        title="Resultado da sua simulação"
        subtitle="Com base no seu perfil financeiro e objetivo."
      />
      <div className="mb-b lg-grid-cols-3 grid grid-cols-1 gap-4">
        <Card
          icon={Goal}
          label="Custo da Meta"
          value={data.goalAmount}
          subtitle={'Viagem para o Japão'}
        />
        <Card
          icon={CalendarClock}
          label="Prazo"
          value={`${data.goalDeadline} meses`}
          subtitle={'Prazo para atingir a meta'}
        />
        <Card
          variant="primary"
          icon={PiggyBank}
          label="Economia mensal"
          value={`R$ ${monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          subtitle={'Prazo para atingir a meta'}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <AIInsightsCard simulationId={data.id} />
        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <Card
            icon={Wallet}
            label="Renda mensal"
            value={data.income}
            subtitle={'Renda total bruta por mês'}
          />
          <Card
            icon={CreditCardIcon}
            label="Custos Fixos de Vida"
            value={data.expenses}
            subtitle={'Gastos essenciais por mês'}
          />
          <Card
            icon={Landmark}
            label="Dívidas / Parcelas"
            value={data.debts}
            subtitle={'Valor comprometido em parcelas/depósito'}
          />
        </div>
      </div>
    </main>
  )
}
