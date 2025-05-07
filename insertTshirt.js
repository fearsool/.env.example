import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

const tshirt = {
  title: 'Trust Your Energy T-Shirt',
  description: 'A retro-style tee reminding you to follow your inner compass.',
  tags: ['trust', 'energy', 'spiritual', 'retro'],
  image_urls: ['https://drive.google.com/uc?export=view&id=1r91uwJminm11a-ih1STlhGrcgukJUDDC'],
  color_variants: ['beige'],
  cta: 'Trust your inner compass. Shine your truth.',
  report_data: {
    views: 0,
    clicks: 0,
    orders: 0
  }
}

async function insert() {
  const { data, error } = await supabase.from('tshirts').insert([tshirt])

  if (error) {
    console.error('Hata:', error)
  } else {
    console.log('Başarıyla eklendi:', data)
  }
}

insert()
